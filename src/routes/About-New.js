import React from 'react';
import { Link } from 'react-router-dom';
import mountain from '../images/mountain_hex.png';
import david from '../images/david_hex.png';
import girl from '../images/girl_hex.png';
import '../styles/About-New.scss';

export default function AboutNew(props) {
    return(
        <>
         <div className='page_width'>
                <main id='about-new'>
                    <section className='content'>
                        <div className='images'>
                            <div className='image_wrap'>
                                <img src={mountain} alt='Himalayan Mountain' />
                            </div>
                            <div className='image_wrap'>
                                <img className='' 
                                    src={david} alt='David Meditating on the beach' />
                            </div>
                            <div className='image_wrap'>
                                <img src={girl} alt='Girl meditating at the park' />
                            </div>
                        </div>
                    </section>
                </main>
        </div>
        </>
    );
}