import React from 'react'

export default function Outfit() {
  return (
    <div className="w-full py-20 flex md:flex-row flex-col justify-between items-center gap-20 lg:gap-60">
      <div className="flex flex-col justify-start items-start md:order-2 order-1 md:w-1/2 w-full">
        <h2 className="font-Euclid font-medium md:text-[35px] lg:text-[48px] text-[24px] md:leading-[56px] leading-[32px]">
          Outfit Planning
        </h2>
        <p className="font-Poppins font-medium md:text-[14px] lg:text-[18px] text-[16px] md:leading-[28px] leading-[24px] md:w-[300px] lg:w-[435px] mt-5 w-full">
          Stay stylish without stress. Plan and schedule your outfits in advance
          with Fitstyla, so you always know what to wear and save time getting
          dressed.
        </p>
        <div className=" md:w-[230px] lg:w-[343px] w-[180px] flex flex-col justify-center items-center gap-[16px] mt-10">
          <div className="flex flex-row items-center gap-4 border border-gray-100 md:rounded-lg rounded-[11px] md:w-[230px] lg:w-[343px] w-[180px]">
            <span className="bg-gray-200 py-4 md:w-[70px] lg:w-[96px] w-[66px]">
              <img
                src="/images/tousers.svg"
                alt="trouser-image"
                className="md:w-[40px] lg:w-[50px] w-[34px] flex justify-center items-center m-auto"
              />
            </span>
            <div className="flex flex-col items-center gap-1">
              <div className="flex flex-row items-center gap-2">
                <h4 className="font-Poppins font-medium md:w-[11px] text-[9px] lg:text-[14px] leading-[20px] md:-ml-4 lg:-ml-3">
                  Date
                </h4>
                <img src="/images/love.svg" alt="love-image" />
              </div>
              <p className="font-Poppins font-normal md:w-[11px] text-[9px] lg:text-[12px] leading-[18px] md:-ml-11 lg:-ml-7">
                Elegant
              </p>
              <p className="font-Poppins font-medium text-[7px] md:text-[9px] leading-[14px] custom-gray">
                March 20, 2025
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center gap-4 border border-gray-100 md:rounded-lg rounded-[11px] md:w-[230px] lg:w-[343px] w-[180px]">
            <span className="bg-gray-200 py-5 md:w-[70px] lg:w-[96px] w-[66px]">
              <img
                src="/images/shirt.svg"
                alt="shirt-image"
                className="md:w-[40px] lg:w-[50px] w-[34px] flex justify-center items-center m-auto"
              />
            </span>
            <div className="flex flex-col items-center gap-1">
              <div className="flex flex-row items-center md:gap-4 lg:gap-1">
                <h4 className="font-Poppins font-medium md:w-[11px] text-[9px] lg:text-[14px] leading-[20px]">
                  Brunch
                </h4>
                <img src="/images/drink.svg" alt="drink-image" />
              </div>
              <p className="font-Poppins font-normal md:w-[11px] text-[9px] lg:text-[12px] leading-[18px] md:-ml-[35px] lg:-ml-[41px]">
                Chic
              </p>
              <p className="font-Poppins font-medium text-[7px] md:text-[9px] leading-[14px] custom-gray lg:-ml-3">
                Apr 25, 2025
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full md:order-1 order-2 animate-bounce-slow">
        <img src="/images/iphone16.svg" alt="iphone_image" className="" />
      </div>
    </div>
  );
}
