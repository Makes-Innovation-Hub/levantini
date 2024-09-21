import YouTubePlayer from "./YouTubePlayer";
import { useState } from "react";
import * as S from "./VideoQuestion.styles.js";


const VideoQuestion = ({ question, videoId, height, width, autoplay }) => {
  const [userAnswer, setUserAnswer] = useState("");

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  return (
    <div>
      <S.question>{question}</S.question>
      <YouTubePlayer
        videoId={videoId}
        height={height}
        width={width}
        autoplay={autoplay}
      />
    </div>
  );
};
export default VideoQuestion;
