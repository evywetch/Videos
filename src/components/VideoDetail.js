/*
 => This component contains video detail ; shows video player and video title + description
 => ({ video }) = destructuring from props.video
 => className = "ui segment" = will just give a nice looking  box
 => NOTE: We use iframe tag and then tell it to make a request on its own without any AJAX to some specific Youtube address. Once it makes that request, Youtube will reply with all the HTML and JS required to show a video player on the screen.
 => className="ui embed" is a special class from Semantic UI where to put an embeded video player.
 NOTE: How to see the example on Youtube video of what info they put in the src={} in iFrame tag
    => Go to Youtube and select a video
    => Click "share"(delen) button underneath the video
    => Click "embed"(insluiten) button and you will see the iframe tag info
    => Ex. https://www.youtube.com/embed/2NVpHLtfejI  = consist of 2 sections
        => https://www.youtube.com/embed/ = address to get the video
        => 2NVpHLtfejI = video ID
NOTE: title="video player" ; should define title in iFrame tag, otherwise will get an annoying warning.
 */

import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
