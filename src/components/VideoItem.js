import './VideoItem.css';
import React from 'react';

const VideoItem = ({object, onObjectSelect}) => {
  return (
    <div onClick={() => onObjectSelect(object)} className="video-item item">
      <img alt={object.snippet.title} className="ui image" src={object.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">{object.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;