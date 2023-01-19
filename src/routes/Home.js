import React from 'react';
import '../styles/Home.scss';

export default function Home(props) {
    return (
        <div className='page_width'>
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
        </div>
    );
}