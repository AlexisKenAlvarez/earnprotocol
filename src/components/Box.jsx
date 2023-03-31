import React, { useState } from 'react'


const Box = ({ image, color }) => {

    const [hover, setHover] = useState(false)

    return (
        <div className="h-[12rem] w-[10rem]">
            <div className="bg-white/10 w-full h-full  backdrop-blur-sm relative flex items-center justify-center cursor-pointer" onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }}>
                <img src={`/box/${image}.webp`} alt={image} className="w-20 -mt-6 transition-all ease-in-out duration-300" style={hover ? { filter: `drop-shadow(0px 0px 8px ${color})` } : {}} />
                <div className={`absolute bottom-0 left-0 right-0 mx-auto w-20 h-3 rounded-full blur-[25px] mb-7`} style={{ background: `${color}` }}></div>
            </div>
        </div>
    )
}

export default Box