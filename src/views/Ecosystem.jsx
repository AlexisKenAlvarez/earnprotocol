import React, { useState } from 'react'
import TextAnimSkew from '../anim/TextAnimSkew'
import EcoButton from '../components/EcoButton'
import { EcoList } from '../utils/EcoList'
import EcoTemplate from '../template/EcoTemplate'
import { AnimatePresence, motion } from 'framer-motion'
import TextAnim from '../anim/TextAnim'


const Ecosystem = () => {

    const [translateAmount, setTranslate] = useState(0)
    const trans = ["0%", "100%", "200%", "300%", "400%", "500%"]

    const ecoList = [
        {
            name: 'Liquidity Pools',
        },
        {
            name: 'Staking',
        },
        {
            name: 'Farming',
        },
        {
            name: 'DEX/SWAP',
        },
        {
            name: 'FaaS',
        },

    ]

    const handleTrans = (e) => {
        setTranslate(e)
    }

    const handleBack = () => {
        setTranslate(0)
    }

    return (
        <section className="w-full min-h-screen h-auto bg-blk relative mt-10 overflow-hidden" id="ecosystem">
            <div className="w-full h-full flex transition-all ease-in-out duration-1000" style={{ transform: `translateX(-${trans[translateAmount]})` }}>
                <div className="min-w-full h-full px-8 pb-20">
                    <img src="/bg.webp" alt="bg" className="absolute w-full h-full object-cover left-0 top-0" />

                    <div className="relative z-10 mt-32">
                        <div className="max-w-[1300px] w-full mx-auto text-center skew-x-6 lg:text-6xl sm:text-4xl text-2xl font-[800]">
                            <TextAnimSkew>
                                <h1 className="stroke opacity-20">EARN PROTOCOL</h1>
                            </TextAnimSkew>

                            <TextAnimSkew>
                                <h1 className=''>ECOSYSTEM</h1>
                            </TextAnimSkew>
                        </div>

                        <TextAnim>
                            <p className="text-center opacity-70 max-w-[53rem] mx-auto mt-4">Welcome to our crypto ecosystem, where innovation meets opportunity. Our platform is designed to empower individuals and businesses to participate in the exciting world of digital currencies and blockchain technology. </p>
                        </TextAnim>

                        <div className="max-w-[850px] mx-auto flex flex-wrap justify-center items-center gap-8 mt-20">
                            {ecoList.map((items, i) => {
                                return (
                                    <motion.div initial={{opacity: 0, x: 20, y: 20}} whileInView={{opacity: 1, x: 0, y: 0}} transition={{duration: 1.5, ease: [0.16, 0.77, 0.47, .97] }} className="" key={i} onClick={() => { handleTrans(i + 1) }}>
                                        <EcoButton text={items.name} />
                                    </motion.div>
                                )
                            })}
                        </div>

                    </div>
                </div>

                <AnimatePresence>
                    {EcoList.map((items, i) => {
                        return (
                            <EcoTemplate key={i} sub={items.sub} color={items.color} back={handleBack} content={items.content} image={i + 1} trans={translateAmount} num={i + 1} />
                        )
                    })}
                </AnimatePresence>


            </div>


        </section>
    )
}

export default Ecosystem