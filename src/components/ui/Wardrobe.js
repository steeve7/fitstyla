import React from 'react'
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import iphone15 from "@/components/assests/images/iPhone15.svg";
import spring from "@/components/assests/images/spring.svg";
import fall from "@/components/assests/images/fall.svg";
import summer from "@/components/assests/images/summer.svg";
import winter from "@/components/assests/images/winter.svg";
import Image from 'next/image';

export default function Wardrobe() {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center w-full gap-20 md:gap-14 lg:gap-48 mt-10">
      <div className="flex flex-col justify-start items-start md:w-1/2 w-full">
        <h2 className="font-Euclid font-medium md:text-[35px] lg:text-[48px] text-[24px] w-full">
          Wardrobe Management
        </h2>
        <p className="font-Poppins font-medium text-[16px] md:text-[14px] lg:text-[18px] md:w-[330px] lg:w-[455px] w-full">
          Digitally organize your closet, so you never forget what you own. Add
          new items, categorize them, and access your wardrobe anytime,
          anywhere.
        </p>
        <div className="border border-gray-200 md:w-[280px] lg:w-[418px] w-[238px] md:rounded-[16px] rounded-[9px] md:py-6 py-2 mt-10">
          <div className="flex flex-row justify-between items-center md:px-3 px-2 md:-mt-2">
            <p className="font-Poppins font-medium md:text-[9px] lg:text-[11px] text-[6px]">
              Condition
            </p>
            <p className="font-Poppins font-medium md:text-[9px] lg:text-[11px] text-[6px] custom-red-color flex flex-row items-center gap-1">
              New
              <MdOutlineKeyboardArrowUp className="md:text-[15px] lg:text-[20px] text-[10px]" />
            </p>
          </div>
          <div className="flex flex-row items-center justify-start gap-2 md:mt-5 mt-2 md:px-3 px-2">
            <span className="font-Poppins font-medium md:text-[8px] lg:text-[11px] text-[6px] custom-red-color custom-red-border py-1 px-1 text-center rounded-[14.26px] md:w-[30px] lg:w-[45px] w-[26px]">
              New
            </span>
            <span className="font-Poppins font-medium md:text-[8px] lg:text-[11px] text-[6px] md:w-[50px] lg:w-[67px] w-[39px] rounded-[14.26px] py-1 px-1 border text-center border-gray-200">
              Like New
            </span>
            <span className="font-Poppins font-medium md:text-[8px] lg:text-[11px] text-[6px] md:w-[40px] lg:w-[50px] w-[29px] rounded-[14.26px] py-1 px-1 border text-center border-gray-200">
              Good
            </span>
            <span className="font-Poppins font-medium md:text-[8px] lg:text-[11px] text-[6px] md:w-[30px] lg:w-[41px] w-[24px] rounded-[14.26px] py-1 px-1 border text-center border-gray-200">
              Fair
            </span>
          </div>
        </div>
        <div className="border border-gray-200 md:w-[280px] lg:w-[418px] md:rounded-[16px] rounded-[9px] md:py-6 py-2 mt-5">
          <div className="flex flex-row justify-between items-center md:-mt-3 md:px-3 px-2">
            <p className="font-Poppins font-medium md:text-[9px] lg:text-[11px] text-[7px]">
              Season
            </p>
            <p className="font-Poppins font-medium md:text-[9px] lg:text-[11px] text-[6px] custom-red-color flex flex-row items-center gap-2">
              Summer, Fall
            </p>
          </div>
          <div className="flex flex-row items-center justify-start gap-2 md:mt-5 mt-2 md:px-3 px-2">
            <div className="flex flex-row items-center gap-1 justify-center border py-1 px-4 border-gray-200 rounded-[14.26px] md:w-[50px] lg:w-[70px] w-[40px]">
              <Image
                src={spring}
                alt="spring-image"
                className="md:text-[13px] lg:w-[17px] w-[10px]"
              />
              <p className="font-Poppins font-medium md:text-[8px] lg:text-[11px] text-[6px]">
                Spring
              </p>
            </div>
            <div className="flex flex-row items-center gap-1 justify-center border py-1 px-1 custom-green-border rounded-[14.26px] md:w-[50px] lg:w-[82px] w-[47px]">
              <Image
                src={summer}
                alt="summer-image"
                className="md:text-[13px] lg:w-[17px] w-[10px]"
              />
              <p className="font-Poppins font-medium md:text-[8px] lg:text-[11px] text-[6px]">
                Summer
              </p>
            </div>
            <div className="flex flex-row items-center gap-1 justify-center border py-1 px-2 custom-green-border rounded-[14.26px] md:w-[35px] lg:w-[54px] w-[31px]">
              <Image
                src={fall}
                alt="fall-image"
                className="md:text-[13px] lg:w-[17px] w-[10px]"
              />
              <p className="font-Poppins font-medium md:text-[8px] lg:text-[11px] text-[6px]">
                Fall
              </p>
            </div>
            <div className="border border-gray-200 rounded-[14.26px] md:w-[55px] lg:w-[70.43px] w-[40px] py-1 px-1 flex flex-row items-center gap-1 justify-center">
              <Image
                src={winter}
                alt="winter-image"
                className="md:text-[13px] lg:w-[17px] w-[10px]"
              />
              <p className="font-Poppins font-medium md:text-[8px] lg:text-[11px] text-[6px]">
                Winter
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 md:w-[70%] w-full animate-bounce-slow">
        <Image src={iphone15} alt="iphone-image" />
      </div>
    </div>
  );
}
