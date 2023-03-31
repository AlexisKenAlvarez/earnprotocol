import React from 'react'
import { motion } from 'framer-motion'
import TextAnimSkew from '../anim/TextAnimSkew'
import TextAnim from '../anim/TextAnim'
import Floating from '../anim/Floating'
import Ecosystem from './Ecosystem'

const About = () => {
    return (

        <>
            <section className="w-full h-auto bg-blk py-20 flex justify-center relative md:px-20 px-12 flex-col gap-y-20 z-10" id="about">

                <motion.div initial={{ scale: 1 }} animate={{ scale: 1.3 }} transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="md:w-[18rem] md:h-[18rem] w-[12rem] h-[12rem] bg-purple rounded-full absolute 2xl:left-[35rem] lg:left-[30rem] md:right-10 right-5 top-[27rem] blur-[120px]"></motion.div>

                <motion.div initial={{ scale: 1 }} animate={{ scale: 1.3 }} transition={{ delay: 1, duration: 3, repeat: Infinity, repeatType: "reverse", ease: "linear" }} className="md:w-[18rem] md:h-[18rem] w-[12rem] h-[12rem] bg-aqua rounded-full absolute 2xl:left-[14rem] lg:left-[10rem] md:left-20 left-10 top-[16rem]  blur-[120px]"></motion.div>

                <div className="max-w-[1300px] w-full mx-auto text-center skew-x-6 lg:text-6xl sm:text-4xl text-2xl font-[800]">
                    <TextAnimSkew>
                        <h1 className=''>ABOUT <span className='stroke opacity-20'>EARN PROTOCOL</span></h1>
                    </TextAnimSkew>

                    <TextAnimSkew>
                        <h1 className=''>EARN PROTOCOL</h1>
                    </TextAnimSkew>
                </div>


                <div className="w-fit mx-auto flex items-center gap-x-28 relative z-10 lg:flex-row flex-col gap-y-10 text-center lg:text-left">

                    <Floating>
                        <img src="/about.webp" alt="About" className="w-[25rem]" />
                    </Floating>

                    <div className="max-w-[33rem] 2xl:max-w-[40rem]">
                        <TextAnimSkew>
                            <h3 className="text-2xl font-[600] skew-x-6">CONCEPT OF EARN PROTOCOL</h3>
                        </TextAnimSkew>
                        <div className="text-sm opacity-60 mt-2 flex flex-col gap-y-4">

                            <TextAnim>
                                <p className="">Earn Protocol is an autonomous yield optimizer protocol designed to maximize returns for users throughout digital asset ecosystems. Earn Protocol is a set of smart contracts, which are executed securely on the Binance Smart Chain and enable automated yield optimization. The protocol makes use of various DeFi products such as yield farming, staking, and liquidity provisioning in order to create a unique and powerful platform that enables users to earn more from their digital assets. Through yield farming, users can deposit tokens or coins into any number of the various pools available within the Earn Protocol system to receive rewards based on predetermined conditions.</p>
                            </TextAnim>

                            <TextAnim>
                                <p className="">Staking allows users to lock up funds in order to secure the network and receive rewards for doing so. It also provides users with a more stable income stream than other forms of yield farming as it is less susceptible to volatile market conditions. Lastly, liquidity provisioning is done by allowing users to provide capital in exchange for receiving fees from successful trades made on protocols like Pancakeswap or other DEX's . This helps maintain market stability and further incentivizes trading activity, leading to even more rewards for liquidity providers. In summary, Earn Protocol offers its users with multiple ways of earning passive income through yield optimization and provides a secure method by which they can achieve those returns.</p>
                            </TextAnim>

                        </div>
                    </div>
                </div>

            </section>
        </>

    )
}

export default About