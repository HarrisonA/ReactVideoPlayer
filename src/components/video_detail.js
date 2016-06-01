import React from 'react';

const VideoDetail = ({video}) => {
  if (!video){
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/v/${videoId}`;

  return (
    <div className ="video-detail col-lrg-8">
      <div className="embed-responsive embed-responsive-16by9" style={{width:"100%", height:"280px"}}>
        <iframe type="text/html" className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>

  );
}

export default VideoDetail;
