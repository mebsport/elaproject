import React from 'react';
import './YoutubeEmbeded.css';

const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
  <div className='video-responsive'>
    <iframe
      width='1920'
      height='1080'
      src={`https://www.youtube.com/embed/${embedId}`}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title='Embedded youtube'
    />
  </div>
);

export default YoutubeEmbed;
