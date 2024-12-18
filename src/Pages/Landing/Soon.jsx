import React from 'react'
import soon1 from "../../assets/soon1.svg"
import soon2 from "../../assets/soon2.svg"
import soon3 from "../../assets/soon3.svg"
import soon4 from "../../assets/soon4.svg"

function Soon() {
    return (
        <div className=' flex items-center p-2  flex-col gap-10 justify-center  '>

            <p className="text-center text-3xl md:text-5xl  font-bold">Exciting Features Coming Soon</p>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-2">
                {/* card-------------- */}
                <div className="flex hover:scale-105 transition-transform duration-300 ease-in-out flex-col bg-white/10 rounded-2xl  p-8 justify-center items-center gap-4">
                    <img src={soon1} alt="" className="" />
                    <p className="text-3xl font-semibold tracking-wide ">Staking</p>
                    <p className="text-center tracking-wide ">Earn $POLLEN by staking <br />$HONEY.</p>
                </div>
                <div className="flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out bg-white/10 rounded-2xl  p-8 justify-center items-center gap-4">
                    <img src={soon2} alt="" className="" />
                    <p className="text-3xl font-semibold tracking-wide ">Farming</p>
                    <p className="text-center tracking-wide ">Use $POLLEN to farm rare<br />NFTs and upgrades.</p>
                </div>
                <div className="flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out bg-white/10 rounded-2xl  p-8 justify-center items-center gap-4">
                    <img src={soon3} alt="" className="" />
                    <p className="text-3xl font-semibold tracking-wide ">Marketplace</p>
                    <p className="text-center tracking-wide ">Trade NFTs and build  <br />your hive</p>
                </div>
                <div className="flex flex-col hover:scale-105 transition-transform duration-300 ease-in-out bg-white/10 rounded-2xl  p-8 justify-center items-center gap-4">
                    <img src={soon4} alt="" className="" />
                    <p className="text-3xl font-semibold tracking-wide ">Raids</p>
                    <p className="text-center tracking-wide ">Compete to dominate <br />rival hives</p>
                </div>


            </div>






        </div>
    )
}

export default Soon