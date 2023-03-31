import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion, scroll } from 'framer-motion';
import { GiHamburgerMenu } from 'react-icons/gi'
import NavMobile from './NavMobile'
import Button from './Button';

const Nav = () => {

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

    const [scroll, setScrollPosition] = useState(0);
    const [navActive, setActive] = useState(false)
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const close = () => {
        setActive(false)
    }

    const open = () => {
        setActive(true)
    }

    useEffect(() => {
        console.log(navActive)
    }, [navActive])

    const toTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


    return (
        <nav className='flex items-center p-3 px-6 lg:justify-between left-0 top-0 w-full z-[30] fixed pointer-events-none gap-x-3'>
            <AnimatePresence>
                {navActive ? <NavMobile close={close} active={navActive} key="NavMobile" /> : null}
            </AnimatePresence>
            <img src="/logo.webp" alt="Logo" className="w-16 cursor-pointer pointer-events-auto" onClick={toTop} />

            <div className="">
                <ul className="hidden uppercase font-ginger gap-x-9 text-sm lg:flex pointer-events-auto">
                    <AnimatePresence mode="sync">
                        {navList.map((items, i) => {
                            return (
                                scroll <= 100 ?
                                    <motion.div key={items.label} className="w-fit cursor-pointer group"
                                        initial={{ opacity: 0 }}
                                        animate={{ y: [-100, 0], opacity: 100 }}
                                        transition={{ duration: 0.5, delay: i * 0.2 }}
                                        exit={{ opacity: 0 }}

                                    // style={} COLOR ON HOVER
                                    >
                                        <li className='transition-width ease-in-out duration-300 group-hover:text-pongkan'>
                                            <a href={`#${items.slug}`} className="">
                                                {items.label}
                                            </a>

                                        </li>
                                        <div className="group-hover:w-[70%] mx-auto h-[3px] bg-cyan mt-2 w-0 transition-width ease-in-out duration-300 opacity-0 group-hover:opacity-100"></div>
                                    </motion.div>
                                    : null
                            )
                        })}
                    </AnimatePresence>

                </ul>
            </div>

            <a href="https://earn-protocol.gitbook.io/earn-protocol-whitepaper/" target="_blank" rel="noopener noreferrer" className="pointer-events-auto">
                <Button>
                    <p className="">WHITEPAPER</p>
                </Button>
            </a>

            <GiHamburgerMenu className='lg:hidden block text-3xl ml-auto z-20 relative cursor-pointer' style={navActive ? { pointerEvents: "none" } : { pointerEvents: "auto" }} onClick={open} />

        </nav >
    )
}

export default Nav