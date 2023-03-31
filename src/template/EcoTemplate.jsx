import React from 'react'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'


const EcoTemplate = ({ sub, content, color, back, image }) => {
    return (
        <div className="min-w-full min-h-screen h-auto relative z-10 px-8 pb-12 overflow-hidden" style={{backgroundColor: `${color}`}}>
            <div className="flex items-center gap-x-2 cursor-pointer w-fit mt-7 ml-20" onClick={back}>
                <HiOutlineArrowNarrowLeft className='text-4xl' />
                <h1>Back</h1>

                <h1 className='absolute stroke bottom-7 text-9xl font-[800] right-7 opacity-20 skew-x-6 uppercase'>{sub}</h1>
            </div>



            <div className="flex w-fit mx-auto mt-10 text-center lg:text-left">
                <div className="w-full">
                    {content}
                </div>
                <div className="w-full justify-center lg:flex hidden">
                    <img src={`/eco/${image}.webp`} alt="Eco" className="w-[20rem] h-[20rem] 2xl:h-[24rem] 2xl:w-[24rem]" />
                </div>
            </div>
        </div>
    )
}

export default EcoTemplate