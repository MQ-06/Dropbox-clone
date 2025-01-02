const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  console.log("Authorization Header on Server:", req.headers.authorization);

  const token = req.headers["authorization"]?.split(" ")[1]; 
  if (!token) {
    return res.status(403).json({ message: "Authorization token missing." });
  }

  // JWT verification logic (as per your previous code)
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden" });
    }
    req.user = user;
    next();
  });
};


module.exports = { authenticateToken };

