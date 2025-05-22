import React from "react";

const VideoCard = () => {
  return (
    <>
      <div className="col">
        <div className="video-card">
          <img src="https://i.ytimg.com/vi/ysz5S6PUM-U/hqdefault.jpg" alt="Video Thumbnail" />
          <div className="video-title">Sample Video Title</div>
          <div className="channel-name">Channel Name • 1M views • 1 year ago</div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
