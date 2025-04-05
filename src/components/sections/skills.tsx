"use client";

import { useState } from "react";
import { TECHNOLOGIES } from "@/lib/data";
import Tag from "@/components/data-display/tag";
import TechDetails from "@/components/data-display/tech-details";
import Typography from "@/components/general/typography";
import Container from "@/components/layout/container";
import Image from "next/image";
import logo from "../../../public/images/logos/asma-logo.png";
const SkillsSection = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Split technologies into two rows
  const topRowTechs = TECHNOLOGIES.slice(0, 7); // First 7 technologies for top row
  const bottomRowTechs = TECHNOLOGIES.slice(7, 13); // Next 6 technologies for bottom row

  return (
    <Container id="skills">
      <div className="relative min-h-[900px] overflow-hidden  py-20 text-white">
        {/* <Container className="relative z-[2]"> */}
        <div className="relative z-10  flex flex-col items-center gap-4">
          <div className="self-center">
            <Tag label="Skills" />
          </div>
          <Typography variant="subtitle" className="mt-7  max-w-xl text-center">
            The skills, tools and technologies I am really good at:
          </Typography>
        </div>

        {/* Top row of technologies */}
        <div className="relative z-10 mb-4 mt-6 flex justify-center gap-4">
          {topRowTechs.map((technology, index) => (
            <div
              key={`top-${index}`}
              className="relative"
              onMouseEnter={() => setHoveredTech(technology.label)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <TechDetails {...technology} />

              {/* Connection line from center to this tech (only visible on hover) */}
              <div
                className={`pointer-events-none absolute left-1/2 top-1/2 h-[1px] w-[1px] transition-opacity duration-300 ${
                  hoveredTech === technology.label ? "opacity-50" : "opacity-0"
                }`}
              >
                <svg
                  className="absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2"
                  viewBox="0 0 500 500"
                  preserveAspectRatio="none"
                >
                  <path
                    d={`M250,250 L${200 + index * 40},50`}
                    stroke="purple"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom row of technologies */}
        <div className="relative z-10  flex justify-center gap-4">
          {bottomRowTechs.map((technology, index) => (
            <div
              key={`bottom-${index}`}
              className="relative"
              onMouseEnter={() => setHoveredTech(technology.label)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <TechDetails {...technology} />

              {/* Connection line from center to this tech (only visible on hover) */}
              <div
                className={`pointer-events-none absolute left-1/2 top-1/2 h-[1px] w-[1px] transition-opacity duration-300 ${
                  hoveredTech === technology.label ? "opacity-50" : "opacity-0"
                }`}
              >
                <svg
                  className="absolute left-0 top-0 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2"
                  viewBox="0 0 500 500"
                  preserveAspectRatio="none"
                >
                  <path
                    d={`M250,250 L${180 + index * 50},100`}
                    stroke="purple"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
        {/* </Container> */}
        {/* Central logo with glow effect - THIS WAS MISSING */}
        <div className="absolute left-1/2 top-1/2 mt-[15%] -translate-x-1/2 -translate-y-1/2">
          <div className="relative z-[1]  flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-r  from-[#DA7C25] to-[#B923E1]  text-white">
         <Image src={logo} alt="Asma Logo" style={{ width: "90%", height: "90%" }} />

          </div>
          <div className="absolute inset-0 rounded-full  opacity-30 blur-2xl"></div>

          {/* Orbital lines */}
          <div className="absolute left-1/2 top-1/2 -z-10 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] border border-purple-500/20"></div>
          <div className="border-purple-500/15 absolute left-1/2 top-1/2 -z-10 h-[350px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] border"></div>
          <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-[100%] border border-purple-500/10"></div>
        </div>
        {/* Small orbital icons */}
        <div className="absolute right-[15%] top-1/3 flex h-6 w-6 items-center justify-center rounded-full bg-[#333] opacity-50">
          <span className="text-xs text-white">⚙️</span>
        </div>
        <div className="absolute bottom-1/4 right-[20%] flex h-6 w-6 items-center justify-center rounded-full bg-[#333] opacity-50">
          <span className="text-xs text-white">📱</span>
        </div>
        <div className="absolute bottom-1/3 left-[20%] flex h-6 w-6 items-center justify-center rounded-full bg-[#333] opacity-50">
          <span className="text-xs text-white">📊</span>
        </div>
        <div className="absolute left-[15%] top-1/3 flex h-6 w-6 items-center justify-center rounded-full bg-[#333] opacity-50">
          <span className="text-xs text-white">🔍</span>
        </div>

        {/* Connection lines from logo to icons - these are simplified */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
          <svg
            className="absolute left-0 top-0 h-full w-full opacity-20"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            <path
              d="M500,500 L300,300"
              stroke="purple"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M500,500 L700,300"
              stroke="purple"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M500,500 L300,700"
              stroke="purple"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M500,500 L700,700"
              stroke="purple"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M500,500 L500,300"
              stroke="purple"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M500,500 L500,700"
              stroke="purple"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>

        {/* Connection lines from logo to tech icons */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full">
          <svg
            className="absolute left-0 top-0 h-full w-full opacity-20"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
          >
            {/* Lines to top row icons */}
            <path
              d="M500,500 L350,250"
              stroke="purple"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M500,500 L400,250"
              stroke="purple"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M500,500 L450,250"
              stroke="purple"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M500,500 L500,250"
              stroke="purple"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M500,500 L550,250"
              stroke="purple"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M500,500 L600,250"
              stroke="purple"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M500,500 L650,250"
              stroke="purple"
              strokeWidth="1"
              fill="none"
            />

            {/* Lines to bottom row icons */}
            <path
              d="M500,500 L350,300"
              stroke="purple"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M500,500 L400,300"
              stroke="purple"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M500,500 L450,300"
              stroke="purple"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M500,500 L550,300"
              stroke="purple"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M500,500 L600,300"
              stroke="purple"
              strokeWidth="1"
              fill="none"
            />
            <path
              d="M500,500 L650,300"
              stroke="purple"
              strokeWidth="1"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </Container>
  );
};

export default SkillsSection;
