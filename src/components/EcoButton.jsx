import React from 'react'

const EcoButton = ({ text }) => {
    return (
        <div className="relative">
            <div className="h-16 w-[15rem] bg-purple border-[1px] border-white rounded-lg relative z-10 flex items-center justify-center cursor-pointer">
                <p className="font-[600] text-2xl">{text}</p>
            </div>

            <div className="h-16 w-[15rem] bg-black border-[1px] border-white rounded-lg absolute top-[6px] left-[6px]"></div>
        </div>
    )
}

export default EcoButton