import React from 'react';
import { Player } from 'video-react';
import video from '../video/video.mp4'

export default Video => {
    return (
        <Player>
            <source src={video} />
        </Player>
    );
};