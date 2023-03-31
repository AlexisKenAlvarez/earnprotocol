import React from 'react'
import { SiTwitter } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'

const Footer = () => {

    return (

        <footer className='gap-y-14 w-full h-auto bg-picbg z-10 relative text-white px-20 py-[5rem] flex lg:justify-between lg:flex-row flex-col-reverse justify-center items-center bg-contain bg-earth bg-center bg-no-repeat' >
            <div className="w-full">
                <div className="flex items-center gap-x-3 justify-center lg:justify-start">
                    <img src="/logo.webp" alt="Logo" className="w-12" />
                    {/* <div className="h-10 w-10 bg-gradient-to-br from-myblue to-mypink rounded-full"></div> */}

                    <h1 className='font-header text-3xl font-bold'>Earn Protocol</h1>
                </div>
                <p className='font-poppins text-sm opacity-60 mt-4 text-center lg:text-left'>© 2023 Earn Protocol. All Rights Reserved</p>
            </div>

            <div className="w-full flex flex-col lg:mt-0 text-right lg:items-end items-center">
                <h1 className="font-header font-bold text-2xl">Stay connected:</h1>

                <div className="flex text-lg gap-x-5 mt-7">
                    <a href="" target="_blank" rel="noopener noreferrer" className="">
                        <button className="h-12 w-12 border-[1px] rounded-full flex items-center justify-center transition-all ease-in-out duration-300 hover:scale-[1.1]">
                            <SiTwitter />
                        </button>
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer" className="">
                        <button className="h-12 w-12 border-[1px] rounded-full flex items-center justify-center transition-all ease-in-out duration-300 hover:scale-[1.1]">
                            <FaTelegramPlane className='mr-[3px]' />
                        </button>
                    </a>

                </div>

            </div>
        </footer >
    )
}

export default Footer