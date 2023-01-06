import React from 'react';
import styled from "styled-components";
import video from "./Assets/kidsVideo.mp4";

const VideoPlayer = () => {
  return (
    <div>
        <VideoPlay src={video} />
    </div>
  )
}

export default VideoPlayer;

const VideoPlay = styled.img``;