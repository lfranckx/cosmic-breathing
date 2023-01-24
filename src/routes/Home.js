import React from 'react';
import '../styles/Home.scss';
import { motion } from "framer-motion";
import Animation from '../components/Animation';
import music from '../misc/cosmic-breathing.mp4';

export default function Home(props) {

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    return (
        <>
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={variants}
                className='home_wrap'
            >
                <main id='home'>
                    <div className='small-width'>
                        <div className='flex column-reverse'>
                            <h1>Cosmic Breathing</h1>
                            <h2>
                                <span className='space'> • </span>
                                <span>Vedantic Breathwork</span>
                                <span className='space'> • </span>
                                <span>Meditation</span>
                                <span className='space'> • </span>
                                <span>Yoga in the Himalayan Tradition</span>
                                <span className='space'> • </span>
                            </h2>
                        </div>
                        <h2 className='text-center'>Integrated Approach to Personal Expansion</h2>
                        <div className='hide'>
                            <audio src={music} controls autoPlay/>
                        </div>
                    </div>
                </main>
            </motion.div>
            <Animation />
        </>
        
    );
}