import React, { useState } from "react";
import lines from "../assets/lines.svg";
import left from "../assets/left.svg";
import boost from "../assets/boost.svg";
import filter from "../assets/filter.svg";
import coincrz from "../assets/coincrz.svg";
import tip from "../assets/tip1.svg";
import gigl from "../assets/gigl.svg";
import sign from "../assets/sign.svg";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-[#00A85C] text-white rounded-md md:hidden"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen bg-[#F9E8C9] flex flex-col justify-between border-r border-r-[#E3D3B7] p-4 z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:flex`}
      >
        {/* Top Section */}
        <div className="px-5">
          {/* Title */}
          <h2 className="text-2xl font-bold text-[#00A85C] mb-4">Donny Pad</h2>
          {/* Search Bar */}
          <div className="relative mb-6">
            <div className="bg-[#837f757c] px-1 text-white rounded-lg items-center flex gap-2">
              <CiSearch size={40} />
              <input
                type="text"
                placeholder="Search"
                className="w-full py-2 rounded-md bg-transparent text-white placeholder-white focus:outline-none"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <ul className="space-y-3 font-semibold text-[#3E3D3B]">
              <li className="flex items-center justify-between hover:cursor-pointer">
                <span className="flex gap-2">
                  <img src={lines} alt="" />
                  Sort By
                </span>
                <span>
                  <img src={left} alt="" />
                </span>
              </li>
              <li className="flex items-center justify-between hover:cursor-pointer">
                <span className="flex gap-2">
                  <img src={filter} alt="" />
                  Filter
                </span>
                <span>
                  <img src={left} alt="" />
                </span>
              </li>
              <li className="flex items-center justify-between hover:cursor-pointer">
                <span className="flex gap-2">
                  <img src={boost} alt="" />
                  Boost
                </span>
                <span>
                  <img src={left} alt="" />
                </span>
              </li>
            </ul>
          </nav>

          {/* Section: Tipped Memes */}
          <div className="mt-6 font-semibold border-t border-t-[#F9E8C9]">
            <h3 className="font-semibold mb-2 text-gray-600">Tipped Memes</h3>
            <ul className="space-y-2 text-[#3E3D3B] ">
              <li className="flex items-center gap-2">
                <span>
                  <img src={coincrz} alt="" />
                </span>
                <span>CoinCraze</span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src={tip} alt="" />
                </span>
                <span>TipToken</span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src={gigl} alt="" />
                </span>
                <span>MemeMint</span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src={coincrz} alt="" />
                </span>
                <span>ChuckleCash</span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src={tip} alt="" />
                </span>
                <span>GiggleGold</span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src={coincrz} alt="" />
                </span>
                <span>JokeChain</span>
              </li>
              <li className="flex items-center gap-2">
                <span>
                  <img src={gigl} alt="" />
                </span>
                <span>LaughCoin</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-sm text-gray-600 w-full flex items-center justify-between hover:underline cursor-pointer">
          <span>Sign in</span>
          <img src={sign} alt="" />
        </div>
      </div>

      {/* Mobile Version */}
      <div className="fixed bottom-0 left-0 w-full bg-[#F9E8C9] p-3 flex justify-around items-center shadow-md md:hidden">
        <button className="text-[#00A85C] flex flex-col items-center" onClick={() => setIsSidebarOpen(true)}>
          <AiOutlineMenu size={24} />
          <span className="text-xs">Menu</span>
        </button>
        <button className="text-[#00A85C] flex flex-col items-center">
          <CiSearch size={24} />
          <span className="text-xs">Search</span>
        </button>
        <button className="text-[#00A85C] flex flex-col items-center">
          <img src={sign} alt="Sign In" className="h-6" />
          <span className="text-xs">Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
