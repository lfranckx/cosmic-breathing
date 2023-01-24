import React, { useState, useRef } from 'react';
import music from '../misc/cosmic-breathing.mp4';
import { useLocation } from 'react-router';

export default function AudioPlayer(props) {

    const location = useLocation();
    const homeTextColor = location.pathname === '/' ? 'p1' : 'p1';
    const aboutTextColor = location.pathname === '/about' ? 'p1 bronze' : 'p1';
    const servicesTextColor = location.pathname === '/services' ? 'p1' : 'p1';
    const connectTextColor = location.pathname === '/connect' ? 'p1' : 'p1';


    const audioRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMute = () => {
        setIsMuted(!isMuted);
        audioRef.current.muted = !isMuted;
    }

    const togglePlaying = () => {
        setIsPlaying(!isPlaying);
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
    };

    return (
        <div className='page-width audio-wrap'>
            <audio ref={audioRef} src={music} controls autoPlay loop/>
            <button onClick={togglePlaying} 
                className={`btn-mute ${homeTextColor} ${aboutTextColor} ${servicesTextColor} ${connectTextColor}`}
            >{isPlaying ? "Pause" : "Play"}
            <div className={location.pathname === '/about' ? 'border-bottom bronze' : 'border-bottom'}></div>
            </button>
            
        </div>
    );
}