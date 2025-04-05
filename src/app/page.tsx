"use client"
import { useEffect } from "react";
import HeroSection from "@/components/sections/hero";
import ContactSection from "@/components/sections/contact";
import AboutMeSection from "@/components/sections/about-me";
import SkillsSection from "@/components/sections/skills";
import ExperienceSection from "@/components/sections/experiences";
import TestimonialsSection from "@/components/sections/testimonials";
import WorkSection from "@/components/sections/work";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // You can change the duration here
      once: true,  // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      {/* <ExperienceSection /> */}
      <WorkSection />
      {/* <TestimonialsSection /> */}
      <ContactSection />
    </>
  );
}
