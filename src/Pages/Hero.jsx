import React from "react";
import c1 from "../assets/c1.svg";
import s1 from "../assets/world.svg";
import s2 from "../assets/s1.svg";
import s3 from "../assets/tel.svg";
import s4 from "../assets/r.svg";
import sol from "../assets/sol.svg";
import arrows from "../assets/arrows.svg";
import chrt from "../assets/chrt.svg";
import filter from "../assets/fylter.svg";
import lines from "../assets/three lins.svg";
import { IoIosTrendingUp } from "react-icons/io";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { IoFlagOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { IoRocketOutline } from "react-icons/io5";

const cardData = [
  {
    title: "SXC SpaceX Cats Coin",
    description: "💰 Dive into the world of crypto coins!🚀\nWith digital currencies like Bitcoin and E...",
    percentage: "98.8%",
    amount: "$58K",
    transactions: "5,888 txns",
    progress: "68.8%",
    icons: [s1, s2, s3,s4],
  },
  // Add more objects here for additional cards...
  {
    title: "SXC SpaceX Cats Coin",
    description: "💰 Dive into the world of crypto coins!🚀\nWith digital currencies like Bitcoin and E...",
    percentage: "98.8%",
    amount: "$58K",
    transactions: "5,888 txns",
    progress: "68.8%",
    icons: [s1, s2, s3,s4],
  },
  {
    title: "SXC SpaceX Cats Coin",
    description: "💰 Dive into the world of crypto coins!🚀\nWith digital currencies like Bitcoin and E...",
    percentage: "98.8%",
    amount: "$58K",
    transactions: "5,888 txns",
    progress: "68.8%",
    icons: [s1, s2, s3,s4],
  },
  {
    title: "SXC SpaceX Cats Coin",
    description: "💰 Dive into the world of crypto coins!🚀\nWith digital currencies like Bitcoin and E...",
    percentage: "98.8%",
    amount: "$58K",
    transactions: "5,888 txns",
    progress: "68.8%",
    icons: [s1, s2, s3,s4],
  },
  {
    title: "SXC SpaceX Cats Coin",
    description: "💰 Dive into the world of crypto coins!🚀\nWith digital currencies like Bitcoin and E...",
    percentage: "98.8%",
    amount: "$58K",
    transactions: "5,888 txns",
    progress: "68.8%",
    icons: [s1, s2, s3,s4],
  },
  {
    title: "SXC SpaceX Cats Coin",
    description: "💰 Dive into the world of crypto coins!🚀\nWith digital currencies like Bitcoin and E...",
    percentage: "98.8%",
    amount: "$58K",
    transactions: "5,888 txns",
    progress: "68.8%",
    icons: [s1, s2, s3,s4],
  },
  {
    title: "SXC SpaceX Cats Coin",
    description: "💰 Dive into the world of crypto coins!🚀\nWith digital currencies like Bitcoin and E...",
    percentage: "98.8%",
    amount: "$58K",
    transactions: "5,888 txns",
    progress: "68.8%",
    icons: [s1, s2, s3,s4],
  },
  {
    title: "SXC SpaceX Cats Coin",
    description: "💰 Dive into the world of crypto coins!🚀\nWith digital currencies like Bitcoin and E...",
    percentage: "98.8%",
    amount: "$58K",
    transactions: "5,888 txns",
    progress: "68.8%",
    icons: [s1, s2, s3,s4],
  },
  {
    title: "SXC SpaceX Cats Coin",
    description: "💰 Dive into the world of crypto coins!🚀\nWith digital currencies like Bitcoin and E...",
    percentage: "98.8%",
    amount: "$58K",
    transactions: "5,888 txns",
    progress: "68.8%",
    icons: [s1, s2, s3,s4],
  },
];

function Hero() {
  return (
    <div className="px-4">
      <header className="bg-[#F9E8C9]  py-3">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Donny Pad</h1>
            <p className="text-gray-600 text-[18px]">
              Home of the live stream memes, managed & moderated by the community
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <button className="hover:bg-[#00A85C] border hover:text-white flex items-center justify-center gap-2 border-[#00A85C] text-[#00A85C] px-3 py-[6px] rounded-lg text-[18px] transition">
              <GoQuestion />
              How Does It Work
            </button>
            <button className="bg-[#00A85C] hover:bg-[#00A85C] flex items-center justify-center gap-2 text-white px-3 py-[6px] rounded-lg text-[18px] transition">
              <IoRocketOutline />
              Launch Your Own Token
            </button>
          </div>
        </div>
        <div className="mt-4 flex text-[15px]  flex-row gap-2 items-center ">
          <div className="grid grid-cols-2 gap-2 flex-[.2]">
            <button className="bg-[#00A85C] hover:bg-[#00A85C] flex gap-2 items-center text-white px-3 py-[6px] rounded-md text-[18px]">
              <img src={lines} alt="" className="" />
              Sort By
            </button>
            <button className="bg-[#00A85C] hover:bg-[#00A85C] text-white px-3 py-1 rounded-md text-[18px] flex items-center gap-1">
              <img src={filter} alt="" className="" />
              Filters
            </button>
          </div>
          <div className="flex flex-[.8] flex-wrap p-1  bg-[#FBF0DB] w-full rounded-lg gap-2">
            <button className="bg-[#E3D3B7]  hover:bg-[#E3d3b7] flex items-center justify-center gap-2 text-gray-700 px-3 py-1 rounded-md text-[18px]">
              Trending
              <IoIosTrendingUp />
            </button>
            <button className=" hover:bg-[#E3d3b7] flex items-center justify-center gap-2 text-gray-700 px-3 py-1 rounded-md text-[18px]">
              Top <HiOutlineChartSquareBar />
            </button>
            <button className=" hover:bg-[#E3d3b7] flex items-center justify-center gap-2 text-gray-700 px-3 py-1 rounded-md text-[18px]">
              Rising
              <img src={chrt} alt="" className="" />
            </button>
            <button className=" hover:bg-[#E3d3b7] flex items-center justify-center gap-2 text-gray-700 px-3 py-1 rounded-md text-[18px]">
              Finalized
              <IoFlagOutline />
            </button>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-5">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-[#E3D3B7] flex flex-col h-[178px] w-[400px] gap-5 rounded-lg shadow-sm p-2"
          >
            {/* Top Section */}
            <div className="flex gap-2 justify-between ">
              <div className="relative  bgg rounded-lg h-[90px] w-[90px] border flex-[.3]">
                <div className="absolute bottom-[-10px] rounded-full left-[5%] w-[90%] border-white text-[8px] flex items-center justify-center border-[1px] text-white py-1 bg-[#B1A58F]">
                  Live stream daily 4 pm
                </div>
                <div className="w-4 h-4 absolute top-[-7px] overflow-hidden rounded-full border-red-600 right-[-7px] border ">
                  <img src={c1} alt="" className="w-full h-full" />
                </div>
              </div>
              <div className="flex flex-[.8] 8gap-2 flex-col">
                <div className="flex gap-1 items-center ">
                  <h3 className="font-bold truncate w-48 text-[18px] text-[#1D1F22]">
                    {card.title}
                  </h3>
                  <div className="flex gap-1 items-center justify-center">
                    {card.icons.map((icon, i) => (
                      <img key={i} src={icon} alt="" className="w-5 h-5" />
                    ))}
                  </div>
                </div>
                <p className="text-[13px] font-semibold  text-[#6C7275] ">
                  {card.description}
                </p>
              </div>
            </div>

            {/* Metrics */}
            <div className=" p-2  font-semibold rounded-lg bg-[#F9E8C9]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <img src={sol} alt="" className="" />
                  <span className="text-sm font-semibold text-[#00A85C]">
                    {card.percentage}
                  </span>
                  <span className="text-sm text-[#6C7275]">{card.amount}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-[#6C7275]">
                  <img src={arrows} alt="" className="" />
                  <span>{card.transactions}</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-[#E8F5E9] h-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#00A85C] rounded-full"
                  style={{ width: card.progress }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hero;
