"use client";
import { cn } from "@/lib/util";
import image from "../../../public/assets/FASHION_SHOOT_3/p (25).jpg"

export function GCardDemo() {
  return (
    <div className="max-w-xs w-full ">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-3xl shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800 card",
          

          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            Portfolio
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
          A fashion collection inspired by emotional imperfections and Kintsugi, celebrating flaws as unique beauty marks
          </p>
        </div>
      </div>
    </div>
  );
}
