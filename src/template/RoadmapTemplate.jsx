import React from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import TextAnim from '../anim/TextAnim'
import RoadAnim from '../anim/RoadAnim'

const RoadmapTemplate = ({ num, title, list }) => {

    const [circRef, circView] = useInView({ triggerOnce: true, threshold: 1 })
    const [bilog, bView] = useInView({ triggerOnce: true, threshold: 1 })

    return (
        <div className="flex items-center w-fit mx-auto gap-x-12 relative lg:flex-row flex-col gap-y-8 ">
            <TextAnim>
                <div className="text-center text-white/70 lg:w-[12rem] lg:flex-col flex-row flex items-end gap-x-5 ">
                    <h1 className='font-[800] md:text-9xl text-6xl bg-gradient-to-r from-[#6C3BBB] to-cyan inline-block text-transparent bg-clip-text'>Q{num}</h1>
                    <h2 className='font-[600] md:text-5xl text-3xl mt-2 bg-gradient-to-r from-[#6C3BBB] to-cyan inline-block text-transparent bg-clip-text'>2023</h2>
                </div>
            </TextAnim>

            <RoadAnim>
                <div className="md:w-[37rem] sm:w-[25rem] w-[18rem] h-auto relative">
                    <div className="w-full h-full bg-gradient-to-br from-purple to-cyan rounded-[15px] absolute"></div>
                    <div className="scale-[0.98] backdrop-blur rounded-[15px] text-left p-10 relative z-10 bg-blk mx-auto">

                        <ul className="flex flex-col gap-y-3">
                            {list.map((items, i) => {
                                return (
                                    <li className="text-white/70 flex items-center gap-x-3" key={i}>
                                        <p className="text-cyan">•</p>
                                        <div className="">{items}</div>
                                    </li>
                                )
                            })}
                        </ul>

                    </div>
                </div>

            </RoadAnim>


        </div>
    )
}

export default RoadmapTemplate