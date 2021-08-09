import './VideoItem.css';
import React from 'react';

/*
=> ({ video }) = destructuring from props.video
=> NOTE: onClick={() => onVideoSelect(video)} : we  call onVideoSelect function in the arrow function NOT derectly in the on click (onclick={onVideoSelect(video)}) Coz we want to call onVideoSelect with some arguments. If we just do onclick={onVideoSelect} ; the will not be called with "video" argument. But if we do like : onclick={onVideoSelect(video)} ; onVideoSelect will be called directly, will not be called as a callback.

*/
const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div className="video-item item" onClick={() => onVideoSelect(video)}>
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
