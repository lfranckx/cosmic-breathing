import React from 'react';
import '../styles/Home.scss';
import { motion } from "framer-motion";

export default function Home(props) {

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={variants}
        >
            <main id='home'>
                <div className='small_width'>
                    <div className='flex column-reverse'>
                        <h1>Cosmic Breathing</h1>
                        <h2>
                            <span>Vedantic Breathwork</span>
                            <span className='space'> • </span>
                            <span>Meditation</span>
                            <span className='space'> • </span>
                            <span>Yoga in the Himalayan Tradition</span>
                        </h2>
                    </div>
                    <h3 className='text-center'>Integrated Approach to Personal Expansion</h3>
                </div>
            </main>
        </motion.div>
    );
}