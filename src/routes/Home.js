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
            className='page_width'
        >
            <main id='home'>
                <div className='small_width'>
                    <div className='flex column-reverse'>
                        <h1>Cosmic Breathing</h1>
                        <div className='flex row'>
                            <h2>Vedantic Breathwork</h2>
                            <div className='circle'></div>
                            <h2>Meditation</h2>
                            <div className='circle'></div>
                            <h2>Yoga in the Himalayan Tradition</h2>
                        </div>
                    </div>

                    <h3 className='text-center'>Integrated Approach to Personal Expansion</h3>
                </div>
            </main>
        </motion.div>
    );
}