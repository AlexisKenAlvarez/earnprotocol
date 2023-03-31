import React, { useState } from 'react'
import TextAnimSkew from '../anim/TextAnimSkew'
import EcoButton from '../components/EcoButton'
import { EcoList } from '../utils/EcoList'
import EcoTemplate from '../template/EcoTemplate'

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
        <section className="w-full min-h-screen h-auto bg-blk relative mt-10 overflow-hidden">
            <div className="w-full h-full flex transition-all ease-in-out duration-700" style={{ transform: `translateX(-${trans[translateAmount]})` }}>
                <div className="min-w-full h-full px-8">
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

                        <p className="text-center opacity-70 max-w-[53rem] mx-auto mt-4">Welcome to our crypto ecosystem, where innovation meets opportunity. Our platform is designed to empower individuals and businesses to participate in the exciting world of digital currencies and blockchain technology. </p>

                        <div className="max-w-[850px] mx-auto flex flex-wrap justify-center items-center gap-8 mt-20">
                            {ecoList.map((items, i) => {
                                return (
                                    <div className="" key={i} onClick={() => { handleTrans(i + 1) }}>
                                        <EcoButton text={items.name} />

                                    </div>
                                )
                            })}
                        </div>

                    </div>
                </div>

                {EcoList.map((items, i) => {
                    return (
                        <EcoTemplate key={i} sub={items.sub} color={items.color} back={handleBack} content={items.content} image={i + 1} />
                    ) 
                })}

            </div>


        </section>
    )
}

export default Ecosystem