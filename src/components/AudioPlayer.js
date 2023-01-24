import React, { useState, useRef } from 'react';
import music from '../misc/cosmic-breathing.mp4';

export default function AudioPlayer(props) {

    const audioRef = useRef(null);
    const [isMuted, setIsMuted] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [buttonText, setButtonText] = useState("Pause")

    const toggleMute = () => {
        setIsMuted(!isMuted);
        audioRef.current.muted = !isMuted;
        if (isMuted) {
            setButtonText("Play");
        } 
        if (!isMuted) { setButtonText("Pause"); }
    }

    const togglePlaying = () => {
        setIsPlaying(!isPlaying);
        isPlaying ? audioRef.current.pause() : audioRef.current.play();
    };

    return (
        <div className='page-width audio-wrap'>
            <audio ref={audioRef} src={music} controls autoPlay loop/>
            <button onClick={togglePlaying} className='btn-mute'>{isPlaying ? "Pause" : "Play"}</button>
        </div>
    );
}