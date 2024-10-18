import React from 'react';

export default function VideoItem (props) {

  return (
    <video 
      style={props.sx} 
      autoPlay 
      loop 
      muted
      playsInline
    >
      <source src={props.videoUrl} type='video/mp4' />
    </video>
  )
}