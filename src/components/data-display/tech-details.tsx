"use client"

import type { TechDetails as TechDetailsType } from "@/lib/types"
import Link from "@/components/navigation/link"
import Image from "@/components/data-display/image-wrapper"

const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetailsType) => {
  // Handle special cases for certain technologies
  const isXd = label === "Adobe XD"
  const isAi = label === "Adobe Illustrator"
  const isNext = label === "Next.js"

  return (
    <div className="flex flex-col items-center gap-2">
      <Link noCustomization href={url} externalLink>
        <div
          className={`w-12 h-12 rounded-full bg-[#333] flex items-center justify-center transition-transform hover:scale-110
            ${isXd ? "border border-pink-500" : ""}
            ${isAi ? "border border-orange-400" : ""}`}
        >
          {isXd ? (
            <span className="text-pink-500 text-xs font-bold">Xd</span>
          ) : isAi ? (
            <span className="text-orange-400 text-xs font-bold">Ai</span>
          ) : isNext ? (
            <span className="text-white text-xs font-bold">NEXT</span>
          ) : (
            <Image
              src={logo || "/placeholder.svg?height=24&width=24"}
              alt={label}
              width={24}
              height={24}
              className="opacity-80"
            />
          )}
        </div>
      </Link>
      {/* <span className="text-xs text-center text-gray-300">{label}</span> */}
    </div>
  )
}

export default TechDetails

