import React, { useState } from "react";
import lines from "../assets/lines.svg";
import left from "../assets/left.svg";
import boost from "../assets/boost.svg";
import filter from "../assets/filter.svg";
import coincrz from "../assets/coincrz.svg";
import logo from "../assets/logo.jpeg";
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
    <div className="relative font-sans">
      {/* Toggle Button */}
      <button
        className="fixed top-4 left-4 z-50 p-3 bg-[#00A85C] text-white rounded-lg shadow-lg md:hidden"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isSidebarOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen overflow-auto w-64 bg-[#F9E8C9] flex flex-col justify-between border-r border-[#E3D3B7] p-6 z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:flex`}
      >
        {/* Top Section */}
        <div className="space-y-8">
          <div className="text-center">

          <img src={logo} alt="" className="w-[100px] rounded-lg mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-[#00A85C]">Donny Pad</h2>
          
          </div>
          <div className="relative">
            <div className="bg-[#837f757c] px-4 py-2 rounded-lg flex items-center gap-3">
              <CiSearch size={24} className="text-white" />
              <input
                type="text"
                placeholder="Search"
                className="w-full bg-transparent text-white placeholder-white focus:outline-none"
              />
            </div>
          </div>

          <nav className="space-y-4">
            {[
              { icon: lines, label: "Sort By" },
              { icon: filter, label: "Filter" },
              { icon: boost, label: "Boost" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between text-[#3E3D3B] font-semibold hover:text-[#00A85C] cursor-pointer"
              >
                <span className="flex gap-3 items-center">
                  <img src={item.icon} alt={item.label} />
                  {item.label}
                </span>
                <img src={left} alt="Expand" />
              </div>
            ))}
          </nav>
        </div>

        {/* Tipped Memes Section */}
        <div className="space-y-4 border-t pt-4">
          <h3 className="font-bold text-gray-700">Tipped Memes</h3>
          <ul className="space-y-3">
            {["CoinCraze", "TipToken", "MemeMint", "ChuckleCash", "GiggleGold", "JokeChain", "LaughCoin"].map(
              (name, index) => (
                <li key={index} className="flex gap-3 items-center text-[#3E3D3B] font-medium">
                  <img src={index % 2 === 0 ? coincrz : tip} alt={name} />
                  {name}
                </li>
              )
            )}
          </ul>
        </div>

        <div className="text-sm text-gray-600 font-bold mt-4 flex items-center justify-between hover:text-[#00A85C] cursor-pointer">
          <span>Sign in</span>
          <img src={sign} alt="Sign in" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;