import React from 'react';

export default function VideoItem (props) {

  return (
    <video 
      style={props.sx} 
      autoPlay 
      loop 
      muted
      playsInline
      preload='auto'
    >
      <source src={props.videoUrl} type='video/mp4' />
    </video>
  )
}