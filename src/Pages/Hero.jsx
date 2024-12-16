import React from 'react';
import c1 from "../assets/c1.svg";
import s1 from "../assets/s1.svg";
import s2 from "../assets/s2.svg";
import s3 from "../assets/s3.svg";
import sol from "../assets/sol.svg";
import arrows from "../assets/arrows.svg"
import chrt from "../assets/chrt.svg"
import filter from "../assets/fylter.svg"
import lines from "../assets/three lins.svg"
import { IoIosTrendingUp } from "react-icons/io";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { IoFlagOutline } from "react-icons/io5";
import { GoQuestion } from "react-icons/go";
import { IoRocketOutline } from "react-icons/io5";



function Hero() {
  return (

    <div className="px-4">
<header className="bg-[#F9E8C9]  py-3 ">
  <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
    <div>
      <h1 className="text-2xl font-bold text-gray-800">Donny Pad</h1>
      <p className="text-gray-600 text-[18px]">
        Home of the live stream memes, managed & moderated by the community
      </p>
    </div>
    <div className="flex flex-wrap items-center gap-2 md:gap-4">
      <button className="hover:bg-[#00A85C] border hover:text-white flex items-center justify-center gap-2 border-[#00A85C] text-[#00A85C] px-4 py-2 rounded-lg text-[18px] transition">
        <GoQuestion />
        How Does It Work
      </button>
      <button className="bg-[#00A85C] hover:bg-[#00A85C] flex items-center justify-center gap-2 text-white px-4 py-2 rounded-lg text-[18px] transition">
      <IoRocketOutline />
        Launch Your Own Token
       
      </button>
    </div>
  </div>
  <div className="mt-4 flex text-[15px]  border flex-row gap-2 items-center ">
   <div className="grid grid-cols-2 gap-2 flex-[.2]">
   <button className="bg-[#00A85C] hover:bg-[#00A85C] flex gap-2 items-center text-white p-3 rounded-md text-[18px]">

    <img src={lines} alt="" className="" />
      Sort By
    </button>
    <button className="bg-[#00A85C] hover:bg-[#00A85C] text-white px-3 py-1 rounded-md text-[18px] flex items-center gap-1">
        
    <img src={filter} alt="" className="" />
      Filters 
    </button>
   </div>
    <div className="flex flex-[.8] flex-wrap p-2 bg-[#FBF0DB] w-full rounded-lg gap-2">
      <button className="bg-gray-200 hover:bg-gray-300 flex items-center justify-center gap-2 text-gray-700 px-3 py-1 rounded-md text-[18px]">

        Trending 
        <IoIosTrendingUp />
      </button>
      <button className="bg-gray-200 hover:bg-gray-300 flex items-center justify-center gap-2 text-gray-700 px-3 py-1 rounded-md text-[18px]">
        Top <HiOutlineChartSquareBar/>
      </button>
      <button className="bg-gray-200 hover:bg-gray-300 flex items-center justify-center gap-2 text-gray-700 px-3 py-1 rounded-md text-[18px]">
        Rising
        <img src={chrt} alt="" className="" />
      </button>
      <button className="bg-gray-200 hover:bg-gray-300 flex items-center justify-center gap-2 text-gray-700 px-3 py-1 rounded-md text-[18px]">
        Finalized 
        <IoFlagOutline />
      </button>
    </div>
  </div>
</header>

    



    <div className="grid grid-cols-3 gap-5">
      <div className="bg-[#E3D3B7] flex flex-col h-[200px] justify-between rounded-lg shadow-sm p-2">
        {/* Top Section */}
        <div className="flex gap-5 justify-between">
          <div className="relative w-[200px] bgg rounded-lg h-[100px] border flex-[.3]">
            <div className="absolute bottom-[-10px] rounded-full left-[10%] w-[80%]  border-white text-[8px] flex items-center justify-center border-[3px] text-white  py-1 bg-[#B1A58F]">Live stream daily 4 pm</div>
            <div className="w-5 h-5 absolute top-[-10px] overflow-hidden rounded-full border-red-600 right-[-10px] border ">
                <img src={c1} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-[.8] gap-2 flex-col">
           <div className="flex gap-2"> <h3 className="font-bold text-xl text-[#1D1F22]">SXC SpaceX Cats Coin</h3>
              <div className="flex gap-2 items-center justify-center">
                <img src={s1} alt="" className="w-5 h-5" />
                <img src={s2} alt="" className="w-5 h-5" />
                <img src={s3} alt="" className="w-5 h-5" />
                
                </div></div>
            <p className="text-[14px] text-[#6C7275] leading-snug">
              💰 Dive into the world of crypto coins!🚀
              <br />
              With digital currencies like Bitcoin and E...
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-4 p-2 rounded-lg bg-[#F9E8C9]">
          <div className="flex items-center justify-between mb-2">
            {/* Left Section */}
            <div className="flex items-center gap-2">
                <img src={sol} alt="" className="" />
              <span className="text-sm font-semibold text-[#1D1F22]">98.8%</span>
              <span className="text-sm text-[#6C7275]">$58K </span>
            </div>
            {/* Right Section */}
            <div className="flex items-center gap-1 text-sm text-[#6C7275]">
              
                <img src={arrows} alt="" className="" />
              <span>5,888 txns</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#E8F5E9] h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4CAF50] rounded-full"
              style={{ width: "68.8%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="bg-[#E3D3B7] flex flex-col h-[200px] justify-between rounded-lg shadow-sm p-2">
        {/* Top Section */}
        <div className="flex gap-5 justify-between">
          <div className="relative w-[200px] bgg rounded-lg h-[100px] border flex-[.3]">
            <div className="absolute bottom-[-10px] rounded-full left-[10%] w-[80%]  border-white text-[8px] flex items-center justify-center border-[3px] text-white  py-1 bg-[#B1A58F]">Live stream daily 4 pm</div>
            <div className="w-5 h-5 absolute top-[-10px] overflow-hidden rounded-full border-red-600 right-[-10px] border ">
                <img src={c1} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-[.8] gap-2 flex-col">
           <div className="flex gap-2"> <h3 className="font-bold text-xl text-[#1D1F22]">SXC SpaceX Cats Coin</h3>
              <div className="flex gap-2 items-center justify-center">
                <img src={s1} alt="" className="w-5 h-5" />
                <img src={s2} alt="" className="w-5 h-5" />
                <img src={s3} alt="" className="w-5 h-5" />
                
                </div></div>
            <p className="text-[14px] text-[#6C7275] leading-snug">
              💰 Dive into the world of crypto coins!🚀
              <br />
              With digital currencies like Bitcoin and E...
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-4 p-2 rounded-lg bg-[#F9E8C9]">
          <div className="flex items-center justify-between mb-2">
            {/* Left Section */}
            <div className="flex items-center gap-2">
                <img src={sol} alt="" className="" />
              <span className="text-sm font-semibold text-[#1D1F22]">98.8%</span>
              <span className="text-sm text-[#6C7275]">$58K </span>
            </div>
            {/* Right Section */}
            <div className="flex items-center gap-1 text-sm text-[#6C7275]">
              
                <img src={arrows} alt="" className="" />
              <span>5,888 txns</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#E8F5E9] h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4CAF50] rounded-full"
              style={{ width: "68.8%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="bg-[#E3D3B7] flex flex-col h-[200px] justify-between rounded-lg shadow-sm p-2">
        {/* Top Section */}
        <div className="flex gap-5 justify-between">
          <div className="relative w-[200px] bgg rounded-lg h-[100px] border flex-[.3]">
            <div className="absolute bottom-[-10px] rounded-full left-[10%] w-[80%]  border-white text-[8px] flex items-center justify-center border-[3px] text-white  py-1 bg-[#B1A58F]">Live stream daily 4 pm</div>
            <div className="w-5 h-5 absolute top-[-10px] overflow-hidden rounded-full border-red-600 right-[-10px] border ">
                <img src={c1} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-[.8] gap-2 flex-col">
           <div className="flex gap-2"> <h3 className="font-bold text-xl text-[#1D1F22]">SXC SpaceX Cats Coin</h3>
              <div className="flex gap-2 items-center justify-center">
                <img src={s1} alt="" className="w-5 h-5" />
                <img src={s2} alt="" className="w-5 h-5" />
                <img src={s3} alt="" className="w-5 h-5" />
                
                </div></div>
            <p className="text-[14px] text-[#6C7275] leading-snug">
              💰 Dive into the world of crypto coins!🚀
              <br />
              With digital currencies like Bitcoin and E...
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-4 p-2 rounded-lg bg-[#F9E8C9]">
          <div className="flex items-center justify-between mb-2">
            {/* Left Section */}
            <div className="flex items-center gap-2">
                <img src={sol} alt="" className="" />
              <span className="text-sm font-semibold text-[#1D1F22]">98.8%</span>
              <span className="text-sm text-[#6C7275]">$58K </span>
            </div>
            {/* Right Section */}
            <div className="flex items-center gap-1 text-sm text-[#6C7275]">
              
                <img src={arrows} alt="" className="" />
              <span>5,888 txns</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#E8F5E9] h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4CAF50] rounded-full"
              style={{ width: "68.8%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="bg-[#E3D3B7] flex flex-col h-[200px] justify-between rounded-lg shadow-sm p-2">
        {/* Top Section */}
        <div className="flex gap-5 justify-between">
          <div className="relative w-[200px] bgg rounded-lg h-[100px] border flex-[.3]">
            <div className="absolute bottom-[-10px] rounded-full left-[10%] w-[80%]  border-white text-[8px] flex items-center justify-center border-[3px] text-white  py-1 bg-[#B1A58F]">Live stream daily 4 pm</div>
            <div className="w-5 h-5 absolute top-[-10px] overflow-hidden rounded-full border-red-600 right-[-10px] border ">
                <img src={c1} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-[.8] gap-2 flex-col">
           <div className="flex gap-2"> <h3 className="font-bold text-xl text-[#1D1F22]">SXC SpaceX Cats Coin</h3>
              <div className="flex gap-2 items-center justify-center">
                <img src={s1} alt="" className="w-5 h-5" />
                <img src={s2} alt="" className="w-5 h-5" />
                <img src={s3} alt="" className="w-5 h-5" />
                
                </div></div>
            <p className="text-[14px] text-[#6C7275] leading-snug">
              💰 Dive into the world of crypto coins!🚀
              <br />
              With digital currencies like Bitcoin and E...
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-4 p-2 rounded-lg bg-[#F9E8C9]">
          <div className="flex items-center justify-between mb-2">
            {/* Left Section */}
            <div className="flex items-center gap-2">
                <img src={sol} alt="" className="" />
              <span className="text-sm font-semibold text-[#1D1F22]">98.8%</span>
              <span className="text-sm text-[#6C7275]">$58K </span>
            </div>
            {/* Right Section */}
            <div className="flex items-center gap-1 text-sm text-[#6C7275]">
              
                <img src={arrows} alt="" className="" />
              <span>5,888 txns</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#E8F5E9] h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4CAF50] rounded-full"
              style={{ width: "68.8%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="bg-[#E3D3B7] flex flex-col h-[200px] justify-between rounded-lg shadow-sm p-2">
        {/* Top Section */}
        <div className="flex gap-5 justify-between">
          <div className="relative w-[200px] bgg rounded-lg h-[100px] border flex-[.3]">
            <div className="absolute bottom-[-10px] rounded-full left-[10%] w-[80%]  border-white text-[8px] flex items-center justify-center border-[3px] text-white  py-1 bg-[#B1A58F]">Live stream daily 4 pm</div>
            <div className="w-5 h-5 absolute top-[-10px] overflow-hidden rounded-full border-red-600 right-[-10px] border ">
                <img src={c1} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-[.8] gap-2 flex-col">
           <div className="flex gap-2"> <h3 className="font-bold text-xl text-[#1D1F22]">SXC SpaceX Cats Coin</h3>
              <div className="flex gap-2 items-center justify-center">
                <img src={s1} alt="" className="w-5 h-5" />
                <img src={s2} alt="" className="w-5 h-5" />
                <img src={s3} alt="" className="w-5 h-5" />
                
                </div></div>
            <p className="text-[14px] text-[#6C7275] leading-snug">
              💰 Dive into the world of crypto coins!🚀
              <br />
              With digital currencies like Bitcoin and E...
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-4 p-2 rounded-lg bg-[#F9E8C9]">
          <div className="flex items-center justify-between mb-2">
            {/* Left Section */}
            <div className="flex items-center gap-2">
                <img src={sol} alt="" className="" />
              <span className="text-sm font-semibold text-[#1D1F22]">98.8%</span>
              <span className="text-sm text-[#6C7275]">$58K </span>
            </div>
            {/* Right Section */}
            <div className="flex items-center gap-1 text-sm text-[#6C7275]">
              
                <img src={arrows} alt="" className="" />
              <span>5,888 txns</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#E8F5E9] h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4CAF50] rounded-full"
              style={{ width: "68.8%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="bg-[#E3D3B7] flex flex-col h-[200px] justify-between rounded-lg shadow-sm p-2">
        {/* Top Section */}
        <div className="flex gap-5 justify-between">
          <div className="relative w-[200px] bgg rounded-lg h-[100px] border flex-[.3]">
            <div className="absolute bottom-[-10px] rounded-full left-[10%] w-[80%]  border-white text-[8px] flex items-center justify-center border-[3px] text-white  py-1 bg-[#B1A58F]">Live stream daily 4 pm</div>
            <div className="w-5 h-5 absolute top-[-10px] overflow-hidden rounded-full border-red-600 right-[-10px] border ">
                <img src={c1} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-[.8] gap-2 flex-col">
           <div className="flex gap-2"> <h3 className="font-bold text-xl text-[#1D1F22]">SXC SpaceX Cats Coin</h3>
              <div className="flex gap-2 items-center justify-center">
                <img src={s1} alt="" className="w-5 h-5" />
                <img src={s2} alt="" className="w-5 h-5" />
                <img src={s3} alt="" className="w-5 h-5" />
                
                </div></div>
            <p className="text-[14px] text-[#6C7275] leading-snug">
              💰 Dive into the world of crypto coins!🚀
              <br />
              With digital currencies like Bitcoin and E...
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-4 p-2 rounded-lg bg-[#F9E8C9]">
          <div className="flex items-center justify-between mb-2">
            {/* Left Section */}
            <div className="flex items-center gap-2">
                <img src={sol} alt="" className="" />
              <span className="text-sm font-semibold text-[#1D1F22]">98.8%</span>
              <span className="text-sm text-[#6C7275]">$58K </span>
            </div>
            {/* Right Section */}
            <div className="flex items-center gap-1 text-sm text-[#6C7275]">
              
                <img src={arrows} alt="" className="" />
              <span>5,888 txns</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#E8F5E9] h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4CAF50] rounded-full"
              style={{ width: "68.8%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="bg-[#E3D3B7] flex flex-col h-[200px] justify-between rounded-lg shadow-sm p-2">
        {/* Top Section */}
        <div className="flex gap-5 justify-between">
          <div className="relative w-[200px] bgg rounded-lg h-[100px] border flex-[.3]">
            <div className="absolute bottom-[-10px] rounded-full left-[10%] w-[80%]  border-white text-[8px] flex items-center justify-center border-[3px] text-white  py-1 bg-[#B1A58F]">Live stream daily 4 pm</div>
            <div className="w-5 h-5 absolute top-[-10px] overflow-hidden rounded-full border-red-600 right-[-10px] border ">
                <img src={c1} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-[.8] gap-2 flex-col">
           <div className="flex gap-2"> <h3 className="font-bold text-xl text-[#1D1F22]">SXC SpaceX Cats Coin</h3>
              <div className="flex gap-2 items-center justify-center">
                <img src={s1} alt="" className="w-5 h-5" />
                <img src={s2} alt="" className="w-5 h-5" />
                <img src={s3} alt="" className="w-5 h-5" />
                
                </div></div>
            <p className="text-[14px] text-[#6C7275] leading-snug">
              💰 Dive into the world of crypto coins!🚀
              <br />
              With digital currencies like Bitcoin and E...
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-4 p-2 rounded-lg bg-[#F9E8C9]">
          <div className="flex items-center justify-between mb-2">
            {/* Left Section */}
            <div className="flex items-center gap-2">
                <img src={sol} alt="" className="" />
              <span className="text-sm font-semibold text-[#1D1F22]">98.8%</span>
              <span className="text-sm text-[#6C7275]">$58K </span>
            </div>
            {/* Right Section */}
            <div className="flex items-center gap-1 text-sm text-[#6C7275]">
              
                <img src={arrows} alt="" className="" />
              <span>5,888 txns</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#E8F5E9] h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4CAF50] rounded-full"
              style={{ width: "68.8%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="bg-[#E3D3B7] flex flex-col h-[200px] justify-between rounded-lg shadow-sm p-2">
        {/* Top Section */}
        <div className="flex gap-5 justify-between">
          <div className="relative w-[200px] bgg rounded-lg h-[100px] border flex-[.3]">
            <div className="absolute bottom-[-10px] rounded-full left-[10%] w-[80%]  border-white text-[8px] flex items-center justify-center border-[3px] text-white  py-1 bg-[#B1A58F]">Live stream daily 4 pm</div>
            <div className="w-5 h-5 absolute top-[-10px] overflow-hidden rounded-full border-red-600 right-[-10px] border ">
                <img src={c1} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-[.8] gap-2 flex-col">
           <div className="flex gap-2"> <h3 className="font-bold text-xl text-[#1D1F22]">SXC SpaceX Cats Coin</h3>
              <div className="flex gap-2 items-center justify-center">
                <img src={s1} alt="" className="w-5 h-5" />
                <img src={s2} alt="" className="w-5 h-5" />
                <img src={s3} alt="" className="w-5 h-5" />
                
                </div></div>
            <p className="text-[14px] text-[#6C7275] leading-snug">
              💰 Dive into the world of crypto coins!🚀
              <br />
              With digital currencies like Bitcoin and E...
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-4 p-2 rounded-lg bg-[#F9E8C9]">
          <div className="flex items-center justify-between mb-2">
            {/* Left Section */}
            <div className="flex items-center gap-2">
                <img src={sol} alt="" className="" />
              <span className="text-sm font-semibold text-[#1D1F22]">98.8%</span>
              <span className="text-sm text-[#6C7275]">$58K </span>
            </div>
            {/* Right Section */}
            <div className="flex items-center gap-1 text-sm text-[#6C7275]">
              
                <img src={arrows} alt="" className="" />
              <span>5,888 txns</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#E8F5E9] h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4CAF50] rounded-full"
              style={{ width: "68.8%" }}
            ></div>
          </div>
        </div>
      </div>
      <div className="bg-[#E3D3B7] flex flex-col h-[200px] justify-between rounded-lg shadow-sm p-2">
        {/* Top Section */}
        <div className="flex gap-5 justify-between">
          <div className="relative w-[200px] bgg rounded-lg h-[100px] border flex-[.3]">
            <div className="absolute bottom-[-10px] rounded-full left-[10%] w-[80%]  border-white text-[8px] flex items-center justify-center border-[3px] text-white  py-1 bg-[#B1A58F]">Live stream daily 4 pm</div>
            <div className="w-5 h-5 absolute top-[-10px] overflow-hidden rounded-full border-red-600 right-[-10px] border ">
                <img src={c1} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-[.8] gap-2 flex-col">
           <div className="flex gap-2"> <h3 className="font-bold text-xl text-[#1D1F22]">SXC SpaceX Cats Coin</h3>
              <div className="flex gap-2 items-center justify-center">
                <img src={s1} alt="" className="w-5 h-5" />
                <img src={s2} alt="" className="w-5 h-5" />
                <img src={s3} alt="" className="w-5 h-5" />
                
                </div></div>
            <p className="text-[14px] text-[#6C7275] leading-snug">
              💰 Dive into the world of crypto coins!🚀
              <br />
              With digital currencies like Bitcoin and E...
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="mt-4 p-2 rounded-lg bg-[#F9E8C9]">
          <div className="flex items-center justify-between mb-2">
            {/* Left Section */}
            <div className="flex items-center gap-2">
                <img src={sol} alt="" className="" />
              <span className="text-sm font-semibold text-[#1D1F22]">98.8%</span>
              <span className="text-sm text-[#6C7275]">$58K </span>
            </div>
            {/* Right Section */}
            <div className="flex items-center gap-1 text-sm text-[#6C7275]">
              
                <img src={arrows} alt="" className="" />
              <span>5,888 txns</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#E8F5E9] h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4CAF50] rounded-full"
              style={{ width: "68.8%" }}
            ></div>
          </div>
        </div>
      </div>
   
    </div>

    </div>
  );
}

export default Hero;
