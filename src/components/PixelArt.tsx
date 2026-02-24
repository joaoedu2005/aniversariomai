import React from 'react';

export const PixelHeart = ({ className = "w-8 h-8 text-red-500" }: { className?: string }) => (
  <svg viewBox="0 0 12 10" className={className} fill="currentColor">
    <path d="M2,0 h2 v1 h-2 v-1 M6,0 h2 v1 h-2 v-1 M1,1 h1 v1 h-1 v-1 M5,1 h1 v1 h-1 v-1 M9,1 h1 v1 h-1 v-1 M0,2 h1 v1 h-1 v-1 M10,2 h1 v1 h-1 v-1 M0,3 h1 v1 h-1 v-1 M10,3 h1 v1 h-1 v-1 M1,4 h1 v1 h-1 v-1 M9,4 h1 v1 h-1 v-1 M2,5 h1 v1 h-1 v-1 M8,5 h1 v1 h-1 v-1 M3,6 h1 v1 h-1 v-1 M7,6 h1 v1 h-1 v-1 M4,7 h1 v1 h-1 v-1 M6,7 h1 v1 h-1 v-1 M5,8 h1 v1 h-1 v-1" />
  </svg>
);

export const PixelCat = ({ className = "w-12 h-12 text-gray-800" }: { className?: string }) => (
  <svg viewBox="0 0 16 12" className={className} fill="currentColor">
    <path d="M2,0 h2 v1 h-2 v-1 M12,0 h2 v1 h-2 v-1 M1,1 h1 v1 h-1 v-1 M3,1 h1 v1 h-1 v-1 M11,1 h1 v1 h-1 v-1 M13,1 h1 v1 h-1 v-1 M0,2 h1 v1 h-1 v-1 M4,2 h1 v1 h-1 v-1 M10,2 h1 v1 h-1 v-1 M14,2 h1 v1 h-1 v-1 M0,3 h1 v1 h-1 v-1 M14,3 h1 v1 h-1 v-1 M0,4 h1 v1 h-1 v-1 M3,4 h1 v1 h-1 v-1 M5,4 h1 v1 h-1 v-1 M9,4 h1 v1 h-1 v-1 M11,4 h1 v1 h-1 v-1 M14,4 h1 v1 h-1 v-1 M0,5 h1 v1 h-1 v-1 M3,5 h1 v1 h-1 v-1 M5,5 h1 v1 h-1 v-1 M9,5 h1 v1 h-1 v-1 M11,5 h1 v1 h-1 v-1 M14,5 h1 v1 h-1 v-1 M0,6 h15 v1 h-15 v-1 M1,7 h13 v1 h-13 v-1 M2,8 h11 v1 h-11 v-1 M3,9 h9 v1 h-9 v-1" />
  </svg>
);

export const PixelBurger = ({ className = "w-10 h-10 text-orange-500" }: { className?: string }) => (
  <svg viewBox="0 0 16 16" className={className} fill="currentColor">
    {/* Top Bun */}
    <path d="M4,2 h8 v1 h-8 v-1 M3,3 h10 v2 h-10 v-2" className="text-orange-400" fill="currentColor"/>
    {/* Lettuce */}
    <path d="M2,5 h12 v1 h-12 v-1" className="text-green-500" fill="currentColor"/>
    {/* Cheese */}
    <path d="M2,6 h12 v1 h-12 v-1" className="text-yellow-400" fill="currentColor"/>
    {/* Meat */}
    <path d="M2,7 h12 v2 h-12 v-2" className="text-red-800" fill="currentColor"/>
    {/* Bottom Bun */}
    <path d="M3,9 h10 v2 h-10 v-2 M4,11 h8 v1 h-8 v-1" className="text-orange-400" fill="currentColor"/>
  </svg>
);

export const PixelPizza = ({ className = "w-10 h-10 text-yellow-500" }: { className?: string }) => (
  <svg viewBox="0 0 16 16" className={className} fill="currentColor">
    {/* Crust */}
    <path d="M2,2 h12 v2 h-12 v-2" className="text-orange-600" fill="currentColor"/>
    {/* Cheese */}
    <path d="M3,4 h10 v2 h-10 v-2 M4,6 h8 v2 h-8 v-2 M5,8 h6 v2 h-6 v-2 M6,10 h4 v2 h-4 v-2 M7,12 h2 v2 h-2 v-2" className="text-yellow-400" fill="currentColor"/>
    {/* Pepperoni */}
    <rect x="4" y="5" width="2" height="1" className="text-red-600" fill="currentColor"/>
    <rect x="9" y="5" width="2" height="1" className="text-red-600" fill="currentColor"/>
    <rect x="7" y="7" width="2" height="1" className="text-red-600" fill="currentColor"/>
    <rect x="5" y="9" width="2" height="1" className="text-red-600" fill="currentColor"/>
  </svg>
);

export const PixelPudding = ({ className = "w-10 h-10 text-yellow-300" }: { className?: string }) => (
  <svg viewBox="0 0 12 10" className={className} fill="currentColor">
    <path d="M3,0 h6 v1 h-6 v-1 M2,1 h8 v1 h-8 v-1 M1,2 h10 v5 h-10 v-5 M0,7 h12 v1 h-12 v-1 M1,8 h10 v1 h-10 v-1" />
    <rect x="4" y="0" width="4" height="2" className="text-amber-800" fill="currentColor"/>
  </svg>
);

export const PixelSoda = ({ className = "w-8 h-12 text-red-500" }: { className?: string }) => (
  <svg viewBox="0 0 8 12" className={className} fill="currentColor">
    <path d="M2,0 h4 v1 h-4 v-1 M1,1 h6 v9 h-6 v-9 M2,10 h4 v1 h-4 v-1" />
    <rect x="3" y="4" width="2" height="4" className="text-white/50" fill="currentColor"/>
  </svg>
);

export const PixelTV = ({ className = "w-12 h-10 text-gray-700" }: { className?: string }) => (
  <svg viewBox="0 0 14 10" className={className} fill="currentColor">
    <path d="M2,0 h1 v1 h-1 v-1 M11,0 h1 v1 h-1 v-1 M3,1 h8 v1 h-8 v-1 M0,2 h14 v7 h-14 v-7 M1,3 h12 v5 h-12 v-5 M2,9 h2 v1 h-2 v-1 M10,9 h2 v1 h-2 v-1" />
    <rect x="2" y="3" width="10" height="5" className="text-blue-300" fill="currentColor"/>
  </svg>
);

export const PixelGirl = ({ className = "w-16 h-16 text-pink-500" }: { className?: string }) => (
  <svg viewBox="0 0 16 16" className={className} fill="currentColor">
    {/* Hair */}
    <path d="M4,1 h8 v1 h-8 v-1 M3,2 h10 v1 h-10 v-1 M2,3 h12 v2 h-12 v-2 M1,5 h2 v2 h-2 v-2 M13,5 h2 v2 h-2 v-2" className="text-yellow-700" fill="currentColor" />
    {/* Face */}
    <path d="M3,5 h10 v4 h-10 v-4 M4,9 h8 v1 h-8 v-1 M5,10 h6 v1 h-6 v-1" className="text-orange-200" fill="currentColor" />
    {/* Eyes */}
    <rect x="5" y="6" width="2" height="2" className="text-black" fill="currentColor" />
    <rect x="9" y="6" width="2" height="2" className="text-black" fill="currentColor" />
    {/* Blush */}
    <rect x="4" y="7" width="1" height="1" className="text-pink-300" fill="currentColor" />
    <rect x="11" y="7" width="1" height="1" className="text-pink-300" fill="currentColor" />
    {/* Body/Dress */}
    <path d="M5,11 h6 v1 h-6 v-1 M4,12 h8 v3 h-8 v-3 M3,15 h10 v1 h-10 v-1" className="text-pink-500" fill="currentColor" />
    {/* Arms */}
    <rect x="3" y="12" width="1" height="2" className="text-orange-200" fill="currentColor" />
    <rect x="12" y="12" width="1" height="2" className="text-orange-200" fill="currentColor" />
  </svg>
);

export const PixelBoy = ({ className = "w-16 h-16 text-blue-500" }: { className?: string }) => (
  <svg viewBox="0 0 16 16" className={className} fill="currentColor">
    {/* Hair */}
    <path d="M4,1 h8 v1 h-8 v-1 M3,2 h10 v1 h-10 v-1 M2,3 h12 v2 h-12 v-2 M2,5 h2 v1 h-2 v-1 M13,4 h1 v2 h-1 v-2" className="text-amber-900" fill="currentColor" />
    {/* Face */}
    <path d="M3,5 h10 v4 h-10 v-4 M4,9 h8 v1 h-8 v-1 M5,10 h6 v1 h-6 v-1" className="text-orange-200" fill="currentColor" />
    {/* Eyes */}
    <rect x="5" y="6" width="2" height="2" className="text-black" fill="currentColor" />
    <rect x="9" y="6" width="2" height="2" className="text-black" fill="currentColor" />
    {/* Body/Shirt */}
    <path d="M4,11 h8 v4 h-8 v-4" className="text-blue-600" fill="currentColor" />
    {/* Arms */}
    <rect x="2" y="11" width="2" height="3" className="text-orange-200" fill="currentColor" />
    <rect x="12" y="11" width="2" height="3" className="text-orange-200" fill="currentColor" />
  </svg>
);

export const PixelGirlDarkHair = ({ className = "w-16 h-16" }: { className?: string }) => (
  <svg viewBox="0 0 16 16" className={className} fill="currentColor">
    {/* Hair (Black) */}
    <path d="M4,1 h8 v1 h-8 v-1 M3,2 h10 v1 h-10 v-1 M2,3 h12 v2 h-12 v-2 M1,5 h2 v4 h-2 v-4 M13,5 h2 v4 h-2 v-4 M1,9 h1 v2 h-1 v-2 M14,9 h1 v2 h-1 v-2" className="text-gray-900" fill="currentColor" />
    {/* Face */}
    <path d="M3,5 h10 v4 h-10 v-4 M4,9 h8 v1 h-8 v-1 M5,10 h6 v1 h-6 v-1" className="text-orange-200" fill="currentColor" />
    {/* Eyes (Green) */}
    <rect x="5" y="6" width="2" height="2" className="text-green-600" fill="currentColor" />
    <rect x="9" y="6" width="2" height="2" className="text-green-600" fill="currentColor" />
    {/* Blush */}
    <rect x="4" y="7" width="1" height="1" className="text-pink-300" fill="currentColor" />
    <rect x="11" y="7" width="1" height="1" className="text-pink-300" fill="currentColor" />
    {/* Body/Dress (Purple) */}
    <path d="M5,11 h6 v1 h-6 v-1 M4,12 h8 v3 h-8 v-3 M3,15 h10 v1 h-10 v-1" className="text-purple-500" fill="currentColor" />
    {/* Arms */}
    <rect x="3" y="12" width="1" height="2" className="text-orange-200" fill="currentColor" />
    <rect x="12" y="12" width="1" height="2" className="text-orange-200" fill="currentColor" />
  </svg>
);
