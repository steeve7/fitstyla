import React from 'react'

export default function Button() {
  return (
    <div className="flex flex-row items-center justify-center gap-5 mt-8">
      <div className="flex flex-row items-center gap-2 custom-green rounded-[16px] px-3 py-3">
        <img src="/images/apple.svg" alt="apple_icon" />
        <p className="text-white font-Poppins font-medium text-[16px]">
          Get on iphone
        </p>
      </div>
      <div className="flex flex-row items-center gap-2 custom-green rounded-[16px] px-3 py-3">
        <img src="/images/android.svg" alt="android_icon" />
        <p className="text-white font-Poppins font-medium text-[16px]">
          Get on Android
        </p>
      </div>
    </div>
  );
}
