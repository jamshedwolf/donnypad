import React from 'react';
import world from "../../assets/world.png"
import tel from "../../assets/tel.png"
import tel2 from "../../assets/tel2.png"
import lastlogo from "../../assets/lastlogo.svg"
import { Element } from 'react-scroll';
import flare from "../../assets/flare.svg";
import flare2 from "../../assets/flare2.png";



export default function Contact() {
    return (
      <Element name="Contact">
        <div className=" bg-black relative   text-white p-4 md:p-8">
              <img src={flare2} alt="" className="absolute  top-[-120px] left-0 "  />
              <img src={flare2} alt="" className="absolute top-[-120px] right-0 rotate-180 "  />
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Brand Section */}
            <div className="space-y-6 z-50">
              <div className="flex items-center flex-col md:flex-row gap-4">
              
                    <img src={lastlogo} alt="" className="" />
                
                <div className='flex-[.7] '>
                 
                  <p className="text-white lg:text-[20px]   w-full   text-center lg:text-left  tracking-wide">Join the Swarm Army. Build, stake, and farm your way  to dominance.</p>
                </div>
              </div>
              <p className="text-lg  text-center md:text-left font-bold text-[20px] py-2 border-b-2 min-w-fit border-b-[#FF9D00]">
              HiveMind:  The sweetest coin in Hyperliquid Blockchain
              </p>
  
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4">
             <img src={world} alt="" className="hover:scale-90 w-[60px] h-[60px] transition-transform duration-300 ease-in-out cursor-pointer" />
             <img src={tel} alt="" className="hover:scale-90 w-[60px] h-[60px] transition-transform duration-300 ease-in-out cursor-pointer" />
             <img src={tel2} alt="" className="hover:scale-90 w-[60px] h-[60px] transition-transform duration-300 ease-in-out cursor-pointer" />
              </div>
            </div>
  
            {/* Contact Form */}
            <div className="space-y-4 z-50 p-6">
              <div className="  flex-col gap-2  rounded-lg ">
                <h2 className="text-3xl font-bold text-[#BCBCBC] mb-4">Contact Form</h2>
                <form className="space-y-4">
                  <div className='flex gap-2'>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-white/15 rounded-2xl p-3 text-sm placeholder-gray-500 text-white"
                    />
                  
                    <input
                      type="email"
                      placeholder="E-mail"
                      className="w-full bg-white/15  rounded-2xl p-3 text-sm placeholder-gray-500 text-white"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Message"
                      className="w-full bg-white/15   rounded-2xl p-3 text-sm placeholder-gray-500 text-white min-h-[120px]"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="flex items-center md:justify-end">
                 <button className="rounded-full btn px-5 text-black font-semibold py-2 ">
                SEND
              </button>
              </div>
             
            </div>
          </div>
        </div>
      
      </div>
      </Element>
    );
  }
  