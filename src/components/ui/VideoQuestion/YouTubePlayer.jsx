import React from "react";

const YouTubePlayer = ({ videoId, height, width, autoplay = 1, mute = 0 }) => {
  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoplay}&mute=${mute}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default YouTubePlayer;
