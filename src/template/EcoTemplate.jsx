import React from 'react'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { AnimatePresence, motion } from 'framer-motion'


const EcoTemplate = ({ sub, content, color, back, image, trans, num }) => {
    return (
        <div className="min-w-full min-h-screen h-auto relative z-10 px-8 pb-12 overflow-hidden" style={{ backgroundColor: `${color}` }}>
            <AnimatePresence>
                {trans === num ? <motion.div initial={{opacity: 0}} animate={ trans === num ? {opacity: 1} : {}} exit={{opacity: 0}} transition={{duration: 1, delay: 0.3}} key={num} className="">
                    <div className="flex items-center gap-x-2 cursor-pointer w-fit mt-7 ml-20" onClick={back}>
                        <HiOutlineArrowNarrowLeft className='text-4xl' />
                        <h1>Back</h1>

                        <motion.h1 initial={{ x: 150, opacity: 0 }} animate={trans === num ? { x: 0, opacity: 0.2 } : {}} transition={{ duration: 1.5, ease: [0.16, 0.77, 0.47, .97], delay: 0.5 }} className='absolute stroke bottom-7 text-9xl font-[800] right-7 opacity-20 skew-x-6 uppercase'>{sub}</motion.h1>
                    </div>



                    <div className="flex w-fit mx-auto mt-10 text-center lg:text-left">
                        <div className="w-full">
                            {content}
                        </div>
                        <div className="w-full justify-center lg:flex hidden">
                            <img src={`/eco/${image}.webp`} alt="Eco" className="w-[20rem] h-[20rem] 2xl:h-[24rem] 2xl:w-[24rem]" />
                        </div>
                    </div>
                </motion.div> : null}
            </AnimatePresence>


        </div>
    )
}

export default EcoTemplate