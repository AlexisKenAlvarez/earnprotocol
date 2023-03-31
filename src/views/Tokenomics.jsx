import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import TextAnimSkew from '../anim/TextAnimSkew';

const Tokenomics = () => {

    const distribution = [
        { type: 'Fairlaunch', percentage: 20, div: 45 },
        { type: 'Liquidity pool', percentage: 10, div: 20 },
        { type: 'Staking pool', percentage: 40, div: 85 },
        { type: 'Giveaway', percentage: 5, div: 8 },
        { type: 'CEX', percentage: 15, div: 35 },
        { type: 'Team', percentage: 5, div: 8 },
        { type: 'Marketing', percentage: 5, div: 8 }

    ];

    return (

        <section className='h-auto w-full bg-blk  flex items-center flex-col justify-center py-20 relative'>
            
            <motion.div initial={{ scale: 1 }} animate={{ scale: 1.3 }} transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="md:w-[18rem] md:h-[18rem] w-[12rem] h-[12rem] bg-purple/70 rounded-full absolute 2xl:left-[35rem] lg:left-[30rem] md:right-10 right-5 top-[27rem] blur-[120px]"></motion.div>

            <motion.div initial={{ scale: 1 }} animate={{ scale: 1.3 }} transition={{ delay: 1, duration: 3, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="md:w-[18rem] md:h-[18rem] w-[12rem] h-[12rem] bg-aqua/70 rounded-full absolute 2xl:left-[14rem] lg:left-[10rem] md:left-20 left-10 top-[16rem]  blur-[120px]"></motion.div>

            <div className="w-[1px] bg-black h-[1px] absolute bottom-[20rem] left-20 shadow-radial"></div>
            <div className="w-[1px] bg-black h-[1px] absolute bottom-[29rem] right-20 shadow-radial"></div>

            <div className="max-w-[1300px] w-full mx-auto text-center skew-x-6 lg:text-6xl sm:text-4xl text-2xl font-[800]">
                <TextAnimSkew>
                    <h1 className="stroke opacity-20">TOKEN SYSTEM</h1>
                </TextAnimSkew>

                <TextAnimSkew>
                    <h1 className=''>TOKENOMICS</h1>
                </TextAnimSkew>
            </div>

            <div className="w-fit mx-auto  relative text-white px-10 flex gap-x-24 lg:flex-row flex-col mt-16">

                <div className="w-full flex items-center justify-center">
                    <div className="md:h-[25rem] md:w-[25rem] h-[18rem] w-[18rem] flex items-center justify-center relative">
                        <img src="/inner.webp" alt="Inner" className="w-[93%] h-[93%] object-cover" />
                        <motion.img animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} src="/outer.webp" alt="Outer" className="absolute left-0 top-0 bottom-0 right-0 m-auto w-full h-full object-cover" />
                    </div>
                </div>

                <div className="w-full lg:text-left mt-12">
                    <h3 className='text-2xl font-semibold'>Tax is 2/2</h3>
                    <div className="font-poppins mt-6  flex flex-col gap-y-4 sm:w-[23rem]">
                        {distribution.map((items, i) => {
                            return (
                                <div className="flex items-center gap-x-4" key={i}>

                                    <motion.div initial={{scaleX: "0%"}} whileInView={{scaleX: "100%"}} transition={{duration: 1.5, ease: [0.16, 0.77, 0.47, .97]}} className="h-4 bg-white bg-gradient-to-l from-purple to-cyan origin-left" style={{ width: `${items.div + 10}%` }}>

                                    </motion.div>

                                    <div className="w-[100%] flex justify-start text-left opacity-60 text-sm">
                                        <h3>{items.percentage}% {items.type}</h3>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>


        </section>


    )
}

export default Tokenomics