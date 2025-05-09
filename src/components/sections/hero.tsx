"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import Typography from "@/components/general/typography";
import AsmaHeadshot from "/public/images/image.jpeg";

import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center p-4 md:p-8">
      <div className="relative mx-auto w-full max-w-4xl">
        {/* Header section with avatar and intro */}
        <div className="mb-16 flex flex-col items-center gap-6 md:flex-row md:items-start">
          <div className="relative">
            <div className="relative">
              <div className="relative z-10 mt-12 h-[200px] w-[200px] overflow-hidden rounded-full">
                <div className="relative h-full w-full overflow-hidden rounded-full">
                  <Image
                    src={AsmaHeadshot || "/placeholder.svg"}
                    alt="Developer with laptop"
                    fill
                    className="z-10 rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-gradient-radial absolute left-1/2 top-1/2 -z-10 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full from-purple-600/30 to-transparent blur-[80px]"></div>
            </div>
          </div>

          <div className="mt-4 flex flex-col items-center md:mt-10 md:items-start">
            <div className="relative text-xl">
           <p className="mb-1 font-bold text-gray-600">
  Hi! I&apos;m{" "}
  <span className="font-bold text-gray-600">Asma Siddique</span>
  <span className="inline-block animate-waving-hand">👋</span>
</p>

              <h2 className="mt-2 text-xl font-semibold   bg-gradient-to-r from-purple-500 via-rose-500 to-orange-500 text-transparent bg-clip-text md:text-2xl">
                <Typewriter
                  words={[
                    "MERN Stack Developer",
                    "Building Scalable Web Apps",
                    "Creating Stunning UI/UX",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </h2>
            </div>

            <p className="mt-4 text-gray-600">A Developer who</p>
            <h1 className="mb-2 mt-1 text-4xl font-bold md:text-5xl">
              Builds solutions <br />
              with{" "}
              <span className="relative text-gray-600">
                code
                <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-purple-500/30"></span>
              </span>
              ...
            </h1>
          </div>
        </div>

        {/* Bio section */}
        <div className="mt-16">
          <h2 className="mb-4 text-xl font-bold md:text-4xl">
            Full Stack Developer
          </h2>
          <div className="mt-8 max-w-2xl space-y-4 text-gray-600" data-aos="fade-up">
            <p>
              A passionate MERN stack developer, specializing in MongoDB,
              Express, React, and Node.js for 2+ years.
            </p>
            <p>
              I create scalable web applications that balance performance and
              user experience, turning complex problems into elegant solutions.
            </p>
          </div>
        </div>

        <button
          onClick={scrollToContact}
          className="mt-6 rounded-xl border-white bg-gradient-to-r from-[#DA7C25] to-[#B923E1] px-6 py-3 text-white transition hover:border hover:bg-gray-800" data-aos="fade-up"
        >
          Contact Me
        </button>
      </div>
    </main>
  );
}
