import React from "react";
import LandingSlide from "./landing_slide";
import AboutUs from "./aboutUs";
import Services from "./services";

import FooterBar from "./footer";

import ArticlesList from "./articlesList";
import ContactUs from "./contactUs";
import Faq from "./faq";
import TeamSlide from "./team";
import TeamSlide2 from "./team2";
import PortfolioSection from "./Work/work2";
import Mentors from "./mentors";
import Testimonials from "./testimonials";
import DesignSlide from "./designSlide";
import TechSlide from "./technologies";

export default function HomePage() {
  return (
    <div className="bg-slate-100 gil-reg">
      <LandingSlide />
      <Services />

      <AboutUs />
      <PortfolioSection />
      <DesignSlide />
      <TechSlide />
      <Testimonials />
      <TeamSlide />
      <TeamSlide2 />
      {/* <Mentors /> */}

      <ArticlesList />

      <Faq />
      <ContactUs />
      <FooterBar />
    </div>
  );
}
