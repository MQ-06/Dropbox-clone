import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/LandingPage/Hero";
import Footer from "../components/Footer";
import Words from "../components/LandingPage/Words";
import ReusableSection from "../components/LandingPage/ReusableSection";
import Industries from "../components/LandingPage/Industries";
import BeforeFooter from "../components/LandingPage/BeforeFooter";
import ImageAdjustments from "../components/LandingPage/ImageAdjustments";
import AOS from "aos";
import "aos/dist/aos.css"; 

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: false, 
    });
  }, []);

  return (
    <div className="bg-white">
      <Navbar
        background="black"
        menuVisibility={{
          products: true,
          solutions: true,
          enterprise: true,
          pricing: true,
          contactSales: true,
          getApp: true,
          signUp: true,
          logIn: true,
          getStarted: true,
        }}
      />
      <Hero />
      <Words />
      <ImageAdjustments />

      <ReusableSection
        badgeText="Document Analytics"
        badgeColor="#78286e"
        heading="Instant, actionable insights"
        subtext="With Dropbox DocSend, page-by-page analytics and permission controls track file use in real-time, so you can see when clients, contractors, or collaborators have viewed your content."
        videoSrc="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/test/homepageredesign2024/features/docsend/user-interface/webm/docsend-permissioning-ui-1080xauto-en_GB.webm"
        imgSrc="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/features/docsend/docsend-feature-photo.png?id=16ad971c-bbd8-4c11-a10d-7b794636ac79&output_type=png"
        buttonPrimaryText="Get started free"
        buttonPrimaryLink="#"
        buttonSecondaryText="Learn more"
        buttonSecondaryLink="#"
        data-aos="fade-up" 
      />

      <ReusableSection
        badgeText="Faster Feedback"
        badgeColor="#007891"
        heading="Reduce the chaos"
        subtext="Dropbox Replay reduces ‌feedback back-and-forth. Collect video, image, and audio feedback all in one place, so you can get to final delivery in no time."
        videoSrc="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/test/homepageredesign2024/features/replay/user-interface/webm/replay-hero-ui-1080xauto.webm"
        imgSrc="https://fjord.dropboxstatic.com/warp/conversion/dropbox/warp/en-us/test/homepageredesign2024/features/replay/The_Luupe_Genya_Oneall.jpg?id=e2669bcf-402f-4d94-bde1-1671ff42b8e7&width=1920&output_type=webp"
        buttonPrimaryText="Get started free"
        buttonPrimaryLink="#"
        buttonSecondaryText="Learn more"
        buttonSecondaryLink="#"
        data-aos="fade-up" // Animation effect
      />

      <Industries />
      <BeforeFooter />
      <Footer />
    </div>
  );
};

export default Home;
