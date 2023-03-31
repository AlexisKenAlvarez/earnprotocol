import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


const RoadAnim = (props) => {

    const [ref, view] = useInView({ triggerOnce: false, threshold: 0.5, rootMargin: `${window.innerHeight}px 0px  0px 0px` })

    return (
        <div ref={ref} className="">
            <motion.div initial={{ y: 100, opacity: 0 }} animate={view ? { y: 0, opacity: 1 } : {}} transition={{ duration: 1.5, ease: [0.16, 0.77, 0.47, .97], delay: 0.1 }} className="">
                {props.children}
            </motion.div>
        </div>
    )
}

export default RoadAnim