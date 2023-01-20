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
                    <section>
                        <h2 className='h1 bronze'>About</h2>
                        <ul className='content'>
                            <li className='container'>
                                <div className='image-wrap'>
                                    <img src={mountain} alt='Himalayan Mountain' />
                                </div>

                                <div className='text-wrap'>
                                    <p className='cream'>The practices of Cosmic Breathing have their roots in the Vedantic lineage of the Himalayas. The great yogic masters passed down the traditions and wisdom over thousands of years verbally until recording them in writing in the Vedas, Upanishads and other sacred yogic scriptures. These teachings are holistic, ever-expanding, and offer transformation to every aspect of the mind, body, and soul. There are no dogmatic beliefs, the teachings are compatible with all faiths, and this wisdom is available to every human being regardless of race, gender expression, or sexuality. Integrating and applying these teachings to our lives allows us radical transformation, trust, fearlessness, compassion, healing and exponential growth.</p>
                                </div>
                                <div className='overlay'></div>
                            </li>
                            
                            <li className='container'>
                                <div className='image-wrap'>
                                    <img className='' 
                                        src={david} alt='David Meditating on the beach' />
                                </div>
                                <div className='text-wrap'>
                                    <p className='cream'>David is a lover of learning and expression, a forever student. From this place of curiosity he discovered yoga in many modalities in southern California where he has practiced for the last decade. After multiple journeys to the foothills of the Himalayas in India to submerge himself in the ancient wisdom, along with years of consistent, devotional practice, David has welcomed the role of sharing these transformational teachings with others.</p>
                                </div>
                                <div className='overlay'></div>
                            </li>

                            <li className='container'>
                                <div className='image-wrap'>
                                    <img src={girl} alt='Girl meditating at the park' />
                                </div>
                                <div className='text-wrap'>
                                    <p className='cream'>The life-altering effects of these practices are undeniable, truly limitless and can be seen all throughout his life. The power of the breath, the deep silence of meditation, and the activation of untapped energy are all at the foundation of his own practice and how he teaches. It is from a place of gratitude and deep honor that he opens his heart and Self to share with anyone who seeks.</p>
                                </div>
                                <div className='overlay'></div>
                            </li>
                        </ul>

                        <div className='link_wrap text-center'>
                            <Link className='uppercase grey link' to='/services'>
                                Practice With Me
                                <div className='border-bottom text-center'></div>
                            </Link>
                        </div>
                    </section>
                </main>
        </div>
        </>
    );
}