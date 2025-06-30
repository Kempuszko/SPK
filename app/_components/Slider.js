"use client";

import Image from "next/image";
import dimg0 from "/public/przyklad1.png";
import dimg1 from "/public/przyklad2.png";
import dimg2 from "/public/przyklad3.png";
import dimg3 from "/public/przyklad4.png";
import img0 from "/public/przyklad1.png";
import img1 from "/public/przyklad2.png";
import img2 from "/public/przyklad3.png";
import img3 from "/public/przyklad4.png";
import { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

function Slider() {
  const [active, setActive] = useState(0);
  const darkImages = [dimg0, dimg1, dimg2, dimg3];
  // const images = [img0, img1, img2, img3];

  return (
    <div className="flex flex-col gap-4 items-center justify-center 2xs:px-4 pb-8">
      <div className="bg-amber-200 2xs:p-2 2xl:py-4 2xl:px-8 rounded-4xl dark:bg-blue-950 transition-colors relative">
        <Image
          src={darkImages.at(active)}
          alt="test"
          className="rounded-3xl hover:scale-[111%] transition-all dark:brightness-95 "
          width="600"
        />
        <button
          className="absolute right-full translate-y-full translate-x-full cursor-pointer text-gray-800 dark:text-gray-200 transition-all"
          onClick={() => setActive((n) => (n > 0 ? n - 1 : 3))}
        >
          <HiArrowLeft size={24} />
        </button>
        <button
          className="absolute left-full translate-y-full -translate-x-full cursor-pointer text-gray-800 dark:text-gray-200 transition-all"
          onClick={() => setActive((n) => (n < 3 ? n + 1 : 0))}
        >
          <HiArrowRight size={24} />
        </button>
      </div>
      <div className="flex gap-4">
        {darkImages.map((img, i) => (
          <button
            onClick={() => setActive(i)}
            key={i}
            className={`opacity-70 h-4 w-4 rounded-full cursor-pointer transition-all ${
              active === i
                ? "dark:bg-blue-800 scale-125 bg-amber-300"
                : "dark:bg-blue-900 bg-amber-200 "
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
