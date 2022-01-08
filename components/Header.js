import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  SearchIcon,
  GlobeIcon,
} from "@heroicons/react/solid";

export default function Header() {
  return (
    // Sticks to the top, spacing top/bottom (p-5 == px-5, py-5), on medium screen change padding
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left - Logo */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
          layout="fill"
          objectFit="contain" // Keep original aspect ratio
          objectPosition="left"
        />
      </div>

      {/* Middle - Search */}
      {/* Flex makes it go in a row */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          // Take as much space as possible, hide input field bg (white)
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Where are you going?"
        />
        {/* Applies to medium screens only > 768px */}
        <SearchIcon className="hidden md:inline-flex md:mx-2 h-8 bg-red-400 text-white rounded-full p-1.5 cursor-pointer" />
      </div>

      {/* Right -  */}
      {/* Space all the components, right align */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
}
