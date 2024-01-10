// npm install react-player
// https://github.com/cookpete/react-player

import React from 'react';
import ReactPlayer from 'react-player/youtube';

// move url into props



export default function Video() {
    const vidUrl="https://www.youtube.com/watch?v=EmOL5uwuHhM";

    return (
        <>
        <div className="video">
        <ReactPlayer
        url =  {vidUrl}
        playing={false}
        controls={true}
        volume={.5}
        />
        </div>
        </>
       
    );

}