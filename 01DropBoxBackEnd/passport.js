const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("./models/users");

if (!process.env.CLIENT_ID || !process.env.CLIENT_SECRET) {
	throw new Error("Missing Google OAuth Client ID or Secret. Set environment variables CLIENT_ID and CLIENT_SECRET.");
}

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			callbackURL: "http://localhost:5000/auth/google/callback",
		},
		async (accessToken, refreshToken, profile, done) => {
			try {
				let existingUser = await User.findOne({ googleId: profile.id });

				if (!existingUser) {
					const newUser = new User({
						googleId: profile.id,
						firstName: profile.name.givenName,
						lastName: profile.name.familyName,
						email: profile.emails[0].value,
						profilePic: profile.photos ? profile.photos[0].value : "", // Save the profile picture URL
					});
					existingUser = await newUser.save();
				}

				return done(null, existingUser);
			} catch (error) {
				console.error("Error in Google OAuth strategy:", error);
				return done(error, false);
			}
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
	try {
		const user = await User.findById(id);
		done(null, user);
	} catch (error) {
		console.error("Error in deserializing user:", error);
		done(error, null);
	}
});

module.exports = passport;
