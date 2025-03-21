import React from 'react'

export default function Footer() {
  return (
    <footer className="dark-green w-full py-10 md:px-20">
      <div className="md:w-[250px] flex flex-col justify-center md:items-start items-center">
        <img src="/images/white-logo.svg" alt="logo" className="w-[142px]" />
        <p className="font-Euclid font-normal text-[16px] text-white mt-3 md:text-start text-center">
          Your personal AI stylist and digital wardrobe.
        </p>
      </div>
      <div className="border border-white md:w-full w-full mt-5" />
      <div className="flex md:flex-row flex-col justify-between items-center mt-8 md:mt-5 md:gap-0 gap-4">
        <div className="flex flex-row items-center gap-3">
          <p className="font-Poppins font-medium text-[16px] text-white cursor-pointer">
            Terms of Use
          </p>
          <p className="font-Poppins font-medium text-[16px] text-white cursor-pointer">
            Privacy Policy
          </p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <img
            src="/images/facebook.svg"
            alt="facebook-icon"
            className="w-[25px] cursor-pointer"
          />
          <img
            src="/images/twitter.svg"
            alt="twitter-icon"
            className="w-[25px] cursor-pointer"
          />
          <img
            src="/images/instagram.svg"
            alt="instagram-icon"
            className="w-[25px] cursor-pointer"
          />
        </div>
      </div>
      <p className="font-Euclid font-normal text-[16px] text-white flex justify-center items-center mt-8 md:mt-5 -mb-5">© 2025 Fitstyla, Inc. All rights reserved.</p>
    </footer>
  );
}
