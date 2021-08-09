import React from 'react';
import VideoItem from './VideoItem';
/*
=> ({videos}) = destructuring props.videos
=> The amount of parameters of this function component is up to the amount of attributs when this function component is used(defined)
 */
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={onVideoSelect}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
