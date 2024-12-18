import React from 'react';
import work1 from "../../assets/work1.svg";
import leftbee from "../../assets/leftbee.svg";
import rightbee from "../../assets/rightbee.svg";
import flare from "../../assets/flare.svg";
import { Element } from 'react-scroll';

export default function How() {
  return (
    <Element name="How It Works">
    <div name="how" className="bg-black relative lg:py-40 flex flex-col lg:gap-20 pt-[130px] text-white p-4 md:p-8">
      <img src={flare} alt="" className="absolute top-[-140px] left-0" />
      <img src={flare} alt="" className="absolute top-[-140px] right-0" />
      <img src={flare} alt="" className="absolute top-[400px] right-[-170px]" />
      <img src={flare} alt="" className="absolute top-[900px] right-[250px]" />
      <img src={flare} alt="" className="absolute top-[900px] left-[250px]" />
      {/* Main Container for the Section */}
      <div className="max-w-6xl mx-auto lg:py-10">
        
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">How The Hive Works?</h1>
          <p className="text-center bg-transparent lg:text-[24px] tracking-wide z-[10] text-[20px] p-2 lg:p-0">
            A simple breakdown of the ecosystem
          </p>
        </div>
        
        {/* First Content Block */}
        <div className="flex mt- lg:py-10 flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 flex flex-col space-y-6 text-center lg:text-left">
            <h2 className="text-2xl font-medium md:text-3xl text-center lg:text-left">
              Stake $HONEY to{" "}
              <br />
              <span className="lg:text-7xl font-semibold text-4xl text-center lg:text-left">
                Earn Rewards
              </span>
            </h2>
            <p className="lg:text-[18px] tracking-wide text-center lg:text-left">
              Begin your journey by staking $HONEY, the core token of the hive ecosystem. 
              By participating in staking, you'll unlock exciting rewards and grow your 
              influence in the hive. Build your stack and watch your rewards multiply.
            </p>
            <button className="px-4 lg:px-10 hover:scale-105 transition-transform duration-300 ease-in-out py-2 lg:text-[20px] lg:max-w-fit flex items-center border-2 border-white z-[1] rounded-full btn font-bold text-black justify-center">
              Learn More
            </button>
          </div>
          
          {/* Right Image Section */}
          <div className="w-full md:w-1/2">
            <div>
              <img 
                src={work1}
                alt="Hive Ecosystem Illustration" 
                className="rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Content Block */}
      <div className="max-w-6xl lg:py-10 py-5  mx-auto">
        <div className="flex mt- flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left Image Section (Mobile Second, Large First) */}
          <div className="w-full order-2 lg:order-1  md:w-1/2">
            <div className="relative">
              <img 
                src={work1}
                alt="Hive Ecosystem Illustration" 
                className="rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
              /> 
              {/* Decorative Bee */}
              <img 
                src={leftbee} 
                alt="Left Bee" 
                className="absolute w-[100px] hidden lg:block lg:top-[-80px] lg:right-[-40px]" 
              />
            </div>
          </div>

          {/* Right Text Section */}
          <div className="w-full md:w-1/2 order-1 lg:order-2  flex flex-col space-y-6 text-center lg:text-left">
            <h2 className="text-2xl font-medium md:text-3xl text-center lg:text-right">
              Stake $HONEY to{" "}
              <br />
              <span className="lg:text-7xl font-semibold text-4xl text-center lg:text-left">
                Earn Rewards
              </span>
            </h2>
            <p className="lg:text-[18px] tracking-wide text-center lg:text-left">
              Begin your journey by staking $HONEY, the core token of the hive ecosystem. 
              By participating in staking, you'll unlock exciting rewards and grow your 
              influence in the hive. Build your stack and watch your rewards multiply.
            </p>
            <button className="px-4 lg:px-10 py-2 hover:scale-105 transition-transform duration-300 ease-in-out lg:text-[20px] lg:max-w-fit flex items-center border-2 border-white z-[1] rounded-full btn font-bold text-black justify-center">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Third Content Block */}
      <div className="max-w-6xl lg:py-10 py-5 mx-auto">
        <div className="flex mt- flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 flex flex-col space-y-6 text-center lg:text-left">
            <h2 className="text-2xl font-medium md:text-3xl text-center lg:text-left">
              <div className="flex flex-col">
                <span>Boost your hive and</span>
                <span>Compete for the ultimate</span>
                <span>Golden Comb.</span>
              </div>
              <span className="lg:text-7xl font-semibold text-4xl text-center lg:text-left">
                Earn Rewards
              </span>
            </h2>
            <p className="lg:text-[18px] tracking-wide text-center lg:text-left">
              Strengthen your hive with upgrades and compete for
              the coveted Golden Comb. Engage in fierce 
              competition, strategize your moves, and climb the 
              ranks to claim dominance in the HiveMind 
              ecosystem.
            </p>
            <button className="px-4 hover:scale-105 transition-transform duration-300 ease-in-out lg:px-10 py-2 lg:text-[20px] lg:max-w-fit flex items-center border-2 border-white z-[1] rounded-full btn font-bold text-black justify-center">
              Learn More
            </button>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              {/* Decorative Bee */}
              <img 
                src={rightbee} 
                alt="Right Bee" 
                className="absolute w-[150px] hidden lg:block lg:top-[-110px] lg:left-[-70px]" 
              />
              <img 
                src={work1}
                alt="Hive Ecosystem Illustration" 
                className="rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </Element>
  );
}
