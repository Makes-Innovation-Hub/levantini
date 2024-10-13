import YouTubePlayer from "../../../../../../lib/YouTubePlayer/YouTubePlayer.jsx";
import * as S from "./VideoQuestion.styles.js";
import { useState } from "react";

const VideoQuestion = ({ question, videoId, height, width }) => {
  const [userAnswer, setUserAnswer] = useState("");

  const handleInputChange = (e) => {
    setUserAnswer(e.target.value);
  };

  return (
    <div>
      <S.Question>{question}</S.Question>
      <YouTubePlayer
        videoId={videoId}
        height={height}
        width={width}
        autoplay={1}
        mute={1}
      />
    </div>
  );
};

export default VideoQuestion;
