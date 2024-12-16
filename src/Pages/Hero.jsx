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
import cat from "../assets/cat.png";
import tiger from "../assets/tiger.png";
import ai from "../assets/ai.png";

import { IoRocketOutline, IoFlagOutline } from "react-icons/io5";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { GoQuestion } from "react-icons/go";
import { BiTrendingUp } from "react-icons/bi";

const cardData = [
  {
    title: "SXC SpaceX Cats Coin",
    img: cat,
    description:
      "💰 Dive into the world of crypto coins!🚀\nWith digital currencies like Bitcoin and E...",
    percentage: "98.8%",
    amount: "$58K",
    transactions: "5,888 txns",
    progress: "68.8%",
    icons: [s1, s2, s3, s4],
  },
  // Add more objects here for additional cards...
  {
    title: "SXC SpaceX Cats Coin",
    img: ai,

    description:
      "💰 Dive into the world of crypto coins!🚀\nWith digital currencies like Bitcoin and E...",
    percentage: "98.8%",
    amount: "$58K",
    transactions: "5,888 txns",
    progress: "68.8%",
    icons: [s1, s2, s3, s4],
    live: true,
  },
  {
    title: "SXC SpaceX Cats Coin",
    description:
      "💰 Dive into the world of crypto coins!🚀\nWith digital currencies like Bitcoin and E...",
    percentage: "98.8%",
    img: tiger,

    amount: "$58K",
    transactions: "5,888 txns",
    progress: "68.8%",
    icons: [s1, s2, s3, s4],
  },
  {
    title: "SXC SpaceX Cats Coin",
    description:
      "💰 Dive into the world of crypto coins!🚀\nWith digital currencies like Bitcoin and E...",
    percentage: "98.8%",
    amount: "$58K",
    img: cat,
    transactions: "5,888 txns",
    progress: "68.8%",
    icons: [s1, s2, s3, s4],
  },
  {
    title: "SXC SpaceX Cats Coin",
    description:
      "💰 Dive into the world of crypto coins!🚀\nWith digital currencies like Bitcoin and E...",
    percentage: "98.8%",
    amount: "$58K",
    img: ai,
    transactions: "5,888 txns",
    progress: "68.8%",
    icons: [s1, s2, s3, s4],
  },
  {
    title: "SXC SpaceX Cats Coin",
    description:
      "💰 Dive into the world of crypto coins!🚀\nWith digital currencies like Bitcoin and E...",
    percentage: "98.8%",
    amount: "$58K",
    transactions: "5,888 txns",
    progress: "68.8%",
    icons: [s1, s2, s3, s4],
    img: cat,
    live: true,
  },
  {
    title: "SXC SpaceX Cats Coin",
    description:
      "💰 Dive into the world of crypto coins!🚀\nWith digital currencies like Bitcoin and E...",
    percentage: "98.8%",
    amount: "$58K",
    transactions: "5,888 txns",
    progress: "68.8%",
    icons: [s1, s2, s3, s4],
    img: ai,
  },
  {
    title: "SXC SpaceX Cats Coin",
    description:
      "💰 Dive into the world of crypto coins!🚀\nWith digital currencies like Bitcoin and E...",
    percentage: "98.8%",
    amount: "$58K",
    transactions: "5,888 txns",
    progress: "68.8%",
    icons: [s1, s2, s3, s4],
    img: tiger,
  },
  {
    title: "SXC SpaceX Cats Coin",
    description:
      "💰 Dive into the world of crypto coins!🚀\nWith digital currencies like Bitcoin and E...",
    percentage: "98.8%",
    amount: "$58K",
    transactions: "5,888 txns",
    progress: "68.8%",
    icons: [s1, s2, s3, s4],
    img: tiger,
    live: true,
  },
];

const Button = ({ className, icon, label }) => (
  <button
    className={`px-4 py-2 rounded-md text-sm md:text-base flex items-center gap-2 ${className}`}
  >
    {label} {icon}
  </button>
);

function Hero() {
  return (
    <div className="p-4 md:p-8">
      <header className="bg-[#F9E8C9] mb-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-2xl font-bold text-gray-800">
              Donny Pad
            </h1>
            <p className="text-gray-600 text-base md:text-lg">
              Home of the live stream memes, managed & moderated by the
              community
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
  {/* Button 1: How Does It Work */}
  <button className="hover:bg-[#00A85C] border hover:text-white flex items-center gap-2 border-[#00A85C] text-[#00A85C] px-4 py-2 rounded-lg text-sm md:text-base transition">
    <GoQuestion className=" hover:text-white" />
    <span>How Does It Work</span>
  </button>

  {/* Button 2: Launch Your Own Token */}
  <button className="bg-[#00A85C] hover:bg-[#007A48] flex items-center gap-2 text-white px-4 py-2 rounded-lg text-sm md:text-base transition">
    <IoRocketOutline className="text-white" />
    <span>Launch Your Own Token</span>
  </button>
</div>

        </div>

        <div className="mt-6 flex flex-col md:flex-row gap-4">
          <div className="flex items-center gap-4">
            <Button
              className="bg-[#00A85C] hover:bg-[#007A48] text-white"
              label="Sort By"
              icon={<img src={lines} alt="" />}
            />
            <Button
              className="bg-[#00A85C] hover:bg-[#007A48] text-white"
              icon={<img src={filter} alt="" />}
              label="Filters"
            />
          </div>
          <div className="flex flex-wrap p-1 bg-[#FBF0DB] w-full rounded-lg gap-3 md:gap-4 flex-[0.8]">
            <Button
              className="bg-[#E3D3B7] hover:bg-[#CBB38F] text-gray-700"
              label="Trending"
              icon={<BiTrendingUp />}
            />
            <Button
              className="hover:bg-[#CBB38F] text-gray-700"
              label="Top"
              icon={<HiOutlineChartSquareBar />}
            />
            <Button
              className="hover:bg-[#CBB38F] text-gray-700"
              label="Rising"
              icon={<img src={chrt} alt="" />}
            />
            <Button
              className="hover:bg-[#CBB38F] text-gray-700"
              label="Finalized"
              icon={<IoFlagOutline />}
            />
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-[#E3D3B7] flex flex-col gap-6 rounded-lg shadow-md p-4"
          >
            <div className="flex gap-4 justify-between items-start">
              <div className="relative rounded-lg h-24 w-24 border flex-shrink-0 ">
                <img
                  src={card.img}
                  alt=""
                  className="object-cover rounded-lg"
                />
                {card.live && (
                  <>
                    <div className="absolute bottom-[-10px] left-2/4 transform -translate-x-2/4 rounded-full w-[95%] border-white text-[6px]  text-center border text-white p-1 bg-[#B1A58F]">
                      Live stream daily 4 pm
                    </div>
                    <div className="w-5 h-5 absolute top-[-7px] right-[-7px] overflow-hidden rounded-full border-red-600 border">
                      <img src={c1} alt="" className="w-full h-full" />
                    </div>
                  </>
                )}
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between flex-wrap">
                  <h3 className="font-bold truncate text-lg text-[#1D1F22]">
                    {card.title.slice(0, 10)}...
                  </h3>
                  {card.live ? (
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="10.6666" cy="10" r="10" fill="#FBF0DB" />
                      <circle cx="10.6666" cy="10" r="8" fill="#FCF4E6" />
                      <circle cx="10.6666" cy="10" r="4" fill="#F04438" />
                    </svg>
                  ) : (
                    <div className="flex gap-1">
                      {" "}
                      {[s1, s2, s3, s4].map((icon) => (
                        <img src={icon} className="w-4 cursor-pointer" />
                      ))}
                    </div>
                  )}
                </div>
                <p className="text-sm font-semibold text-[#6C7275]">
                  {card.description}
                </p>
              </div>
            </div>
            <div className="p-4 font-semibold rounded-lg bg-[#F9E8C9] space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={sol} alt="" className="w-5 h-5" />
                  <span className="text-sm font-semibold text-[#00A85C]">
                    {card.percentage}
                  </span>
                  <span className="text-sm text-[#6C7275]">{card.amount}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-[#6C7275]">
                  <img src={arrows} alt="" className="w-4 h-4" />
                  <span>{card.transactions}</span>
                </div>
              </div>
              <div className="w-full bg-[#E8F5E9] h-2 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#00A85C]"
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
