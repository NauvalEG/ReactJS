import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, onObjectSelect}) => {
  const objectList = videos.map(object => {
    return <VideoItem key={object.id.videoId} onObjectSelect={onObjectSelect} object={object}/>;
  });

  return (
    <div className="ui relaxed divided list">{objectList}</div>
  );
};

export default VideoList;