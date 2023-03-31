import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const SkewDelay = (props) => {

    const [ref, view] = useInView({ triggerOnce: true, threshold: 0.5 })

    return (
        <div ref={ref} className="overflow-hidden">
            <motion.div initial={{ y: 100, x: 100, opacity: 0 }} animate={view ? { y: 0, x: 0, opacity: 1 } : {}} transition={{ duration: 1.5, ease: [0.16, 0.77, 0.47, .97], delay: 0.3 }} exit={{ y: 100, x: 100 }} className="">
                {props.children}
            </motion.div>
        </div>
    )
}

export default SkewDelay