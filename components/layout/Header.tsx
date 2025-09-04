import React, { useState } from "react";
import Image from "next/image";
import { AuthButtons } from "../common/Button";
import Search from "../common/Search";
import ModernDateInput from "../common/ModernDateInput";
import Link from "next/link";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState<Date | null>(null);
  const [checkOut, setCheckOut] = useState<Date | null>(null);
  const [guests, setGuests] = useState("");

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top teal banner */}
      <div className="wflex flex-col sm:flex-row items-center justify-center bg-[#34967C] text-white p-4 h-auto w-full gap-2 ">
        <p className="text-sm text-white text-center px-2 font-medium">
          Overseas trip? Get the latest information on travel guides
        </p>
      </div>

      {/* Main header content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="cursor-pointer">
              <Image
                src="/assets/Logos/alxlogo.png"
                alt="Logo"
                width={120}
                height={60}
                className="h-8 md:h-8  w-auto sm:h-4"
              />
            </Link>
          </div>

          {/* Search bar - hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-2xl mx-4">
            <div className="flex items-center justify-between border border-gray-200 px-4 py-7 w-full h-10 gap-1 rounded-3xl">
              {/* Location input */}
              <div className="flex flex-col flex-1 min-w-0">
                <label className="text-sm text-gray-700 font-semibold truncate">
                  Location
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Search for destination"
                  className="text-xs text-gray-800 truncate px-2 py-1 border border-none focus:outline-none focus:ring-2 focus:ring-green-600 bg-white"
                  style={{ borderRadius: 0 }}
                />
              </div>
              <span className="text-gray-300 mx-1">|</span>

              {/* Check-in date */}
              <div className="flex flex-col flex-1 min-w-0">
                <label className="text-sm text-gray-700 font-semibold truncate">
                  Check-in
                </label>
                <ModernDateInput
                  selected={checkIn}
                  onChange={setCheckIn}
                  placeholder="Add dates"
                  inputClassName="text-xs text-gray-800 truncate px-2 py-1 border border-none focus:outline-none focus:ring-2 focus:ring-green-600 bg-white"
                  style={{ borderRadius: 0 }}
                />
              </div>
              <span className="text-gray-300 mx-1">|</span>

              {/* Check-out date */}
              <div className="flex flex-col flex-1 min-w-0">
                <label className="text-sm text-gray-700 font-semibold truncate">
                  Check-out
                </label>
                <ModernDateInput
                  selected={checkOut}
                  onChange={setCheckOut}
                  placeholder="Add dates"
                  inputClassName="text-xs text-gray-800 truncate px-2 py-1 border border-none focus:outline-none focus:ring-2 focus:ring-green-600 bg-white"
                  style={{ borderRadius: 0 }}
                />
              </div>
              <span className="text-gray-300 mx-1">|</span>

              {/* Guests input (text) */}
              <div className="flex flex-col flex-1 min-w-0">
                <label className="text-sm text-gray-700 font-semibold truncate">
                  Guests
                </label>
                <input
                  type="text"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  placeholder="Add guests"
                  className="text-xs text-gray-800 truncate px-2 py-1 border border-none focus:outline-none focus:ring-2 focus:ring-green-600 bg-white"
                  style={{ borderRadius: 0 }}
                />
              </div>

              <div className="ml-2">
                <Search />
              </div>
            </div>
          </div>

          {/* Mobile search button - shown only on mobile */}
          <div className="md:hidden mx-2 flex-1 flex justify-center">
            <Search mobile />
          </div>

          {/* Auth buttons - desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <AuthButtons />
          </div>

          {/* Mobile profile button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="p-1 focus:outline-none"
              aria-label="Profile menu"
            >
              <Image
                src="/assets/icons/profile 2.png"
                alt="Profile"
                width={40}
                height={40}
                className="w-8 h-8"
              />
            </button>
          </div>
        </div>

        {/* Mobile profile dropdown */}
        {isProfileOpen && (
          <div className="md:hidden absolute right-4 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign In
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign Up
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
