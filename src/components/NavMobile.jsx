import React from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { motion } from 'framer-motion'

const NavMobile = ({ close, active }) => {

    const navList = [
        {
            label: 'about',
            slug: 'about'
        },
        {
            label: 'ecosystem',
            slug: 'ecosystem'
        },
        {
            label: 'tokenomics',
            slug: "tokenomics"
        },
        {
            label: 'roadmap',
            slug: 'roadmap'
        },
    ]

    return (
        <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} exit={{ opacity: 0, y: -20 }} className="w-full h-screen fixed top-0 left-0 z-30 bg-blk" style={active ? { pointerEvents: "auto" } : { pointerEvents: "none" }}>
            <RiCloseFill className='text-4xl top-5 right-5 absolute' onClick={close} />

            <div className="w-fit mx-auto mt-20 text-white">
                <img src="/logo.webp" alt="Logo" className="w-20 mx-auto" />

                <ul className='mt-8 flex flex-col gap-y-14'>
                    {navList.map((items, i) => {
                        return (

                            <li
                                key={i}
                                className="font-poppins uppercase text-center"
                                onClick={close}
                            >
                                <a href={`#${items.slug}`} className="">
                                    {items.label}
                                </a>
                            </li>

                        )
                    })}
                </ul>

            </div>
        </motion.section>
    )
}

export default NavMobile