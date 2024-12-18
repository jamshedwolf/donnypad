import React from 'react'
import hny from "../assets/footer.png";
import { Link } from 'react-scroll';
import rightbee from "../assets/rightbee.svg"

function Footer() {
  return (
    <div className="flex gap-0 flex-col bg-[#FFBB00] lg:bg-black">
        <div className='relative py-5 lg:p-0 lg:h-[30vh] flex items-center justify-center'>

<img src={hny} alt="" className="absolute hidden   h-[130px]  lg:h-full lg:w-full md:block  right-0 " />
 <div className="flex  lg:flex gap-8 mt-20 text-whie flex-col   md:flex-row lg:text-black dark:text-white text-sm lg:text-base ">
        {['Home', 'How It Works', 'Roadmap', 'Contact'].map((item) => (
          <Link
            key={item}
            to={item}
            smooth={true}
            duration={500}
            className="relative cursor-pointer text-center py-1 text-[20px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white  md:after:bg-black dark:after:bg-white after:transition-width after:duration-300 hover:after:w-full"
          >
            {item}
          </Link>
        ))}
      </div>
       <img src={rightbee} alt="" className="absolute hover:scale-90 transition-transform duration-300 ease-in-out  hidden lg:block  lg:top- lg:left-[15%]" />

    </div>
    <div className="py-5 mt-[-10px] flex lg:text-[20px] tracking-wide text-center text-[#674000] bg-[#FFBB00] items-center justify-center">
    @ 2024 Hivemind Labs - All Rights Reserved
    </div>
    </div>
  )
}

export default Footer