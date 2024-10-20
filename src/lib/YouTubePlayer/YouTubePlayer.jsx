import React from "react";
import { extractYouTubeVideoId } from "../../utils/youtubeUtils.js/extractYouTubeVideoId.js";

const YouTubePlayer = ({ url, videoId, height, width, autoplay = 1, mute = 0 }) => {
  const x = videoId ? videoId : extractYouTubeVideoId(url);
  return (
    <iframe
      width={width}
      height={height}
      src={`https://www.youtube.com/embed/${x}?autoplay=${autoplay}&mute=${mute}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default YouTubePlayer;
