import React, { useEffect, useState } from 'react'
import useWindow from '../../hooks/useWindow'
import Box from '../components/Box'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import TextAnim from '../anim/TextAnim'

const Hero = () => {

    const box = [
        {
            image: 'bnb',
            color: '#F3BA2F'
        },
        {
            image: 'solana',
            color: '#AA54EA'
        },
        {
            image: 'eth',
            color: '#FFFFFF'
        },
        {
            image: 'meta',
            color: '#E4761B'
        },
        {
            image: 'tether',
            color: '#50AF95'
        },
        {
            image: 'btc',
            color: '#E4761B'
        },
    ]

    const [boxList, setBox] = useState(
        [
            {
                image: '',
                color: ''
            }
        ]
    )

    const { width, height } = useWindow()

    useEffect(() => {
        setBox(box)

        if (width <= 1280) {
            const sliced = box.slice(0, 4)
            setBox(sliced)
        } else {
            setBox(box)
        }

    }, [width])


    return (
        <section className="w-full h-screen bg-blk flex items-center py-20 px-16 overflow-hidden relative">

            <motion.div initial={{scale: 1}} animate={{scale: 1.3}} transition={{duration: 3, repeat: Infinity, repeatType: "reverse", ease: "linear"}}  className="w-[18rem] h-[18rem] bg-purple rounded-full absolute right-[30rem] top-32 blur-[120px]"></motion.div>
            <motion.div initial={{scale: 1}} animate={{scale: 1.3}} transition={{delay: 1, duration: 3, repeat: Infinity, repeatType: "reverse", ease: "linear"}} className="w-[18rem] h-[18rem] bg-aqua rounded-full absolute right-[8rem] top-[24rem]  blur-[120px]"></motion.div>


            <div className="w-fit mx-auto flex items-center gap-x-[8rem] h-auto ">
                <div className="w-full relative text-center lg:text-left">
                    <motion.img initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: [0.16, 0.77, 0.47, .97] }} src="/ethside.webp" alt="Eth" className="absolute top-0 bottom-0 my-auto md:-left-52 -left-32" />
                    <div className="relative z-10">
                        <TextAnim>
                            <h1 className='font-inter 2xl:text-8xl md:text-6xl text-4xl max-w-[34rem] font-[800] mx-auto w-fit 2xl:mx-0'><span className='bg-gradient-to-r from-[#6C3BBB] to-[#70BCA8] inline-block text-transparent bg-clip-text'>EARN</span> PROTOCOL</h1>
                        </TextAnim>

                        <TextAnim>
                            <p className='opacity-70 max-w-[40rem]'>Earn Protocol is a platform designed to make it easy for users to participate in yield farming, staking, and liquidity pooling. With our innovative platform, you can easily maximize your returns from the cryptoeconomy.</p>
                        </TextAnim>

                        <TextAnim>
                            <a href="" className="">
                                <Button className="mt-8">
                                    Buy token
                                </Button>
                            </a>
                        </TextAnim>

                    </div>


                </div>

                <div className="w-full h-full ml-4 lg:block hidden">
                    <div className="grid xl:grid-cols-3 grid-cols-2 w-fit gap-3">
                        {boxList.map((items, i) => {
                            return (
                                <motion.div initial={{ x: 200, opacity: 0, skewX: "12deg" }} animate={{ x: 0, opacity: 1, skewX: "6deg" }} transition={{ duration: 1.5, delay: i * 0.08, ease: [0.16, 0.77, 0.47, .97] }} className="" key={i}>
                                    <Box image={items.image} color={items.color} />
                                </motion.div>


                            )
                        })}
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Hero