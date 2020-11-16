import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>
       <h1>Enter Music and hit Enter</h1>
       <br></br>
       <p style={{fontSize:'25px'}}>
      A simple YouTubeClone made by me :- Sanket Jadhav

       </p>
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
