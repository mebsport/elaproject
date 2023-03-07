import React from 'react';
import PropTypes from 'prop-types';
import './YoutubeEmbeded.css';

const YoutubeEmbed = ({ embedId }: { embedId: string }) => (
  <div className='video-responsive'>
    <iframe
      width='1920'
      height='1080'
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder='0'
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      allowFullScreen
      title='Embedded youtube'
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
