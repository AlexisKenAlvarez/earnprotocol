import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Floating = (props) => {

    const animation = useAnimation()
    const [ref, view] = useInView({ triggerOnce: true, threshold: 0.5 })

    useEffect(() => {
        sequence()
    }, [])

    async function sequence() {
        await animation.start({ opacity: 1, y: 10, transition: { duration: 1 } })
        animation.start({
            y: [10, -10],
            transition: {
                repeat: Infinity,
                ease: 'easeInOut',
                repeatType: 'reverse',
                duration: 1.5
            }
        })

    }

    return (
        <motion.div className="" initial={{ opacity: 0 }} animate={animation} ref={ref}>
            {props.children}
        </motion.div>
    )
}

export default Floating