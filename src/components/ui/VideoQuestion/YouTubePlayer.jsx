import YouTube from "react-youtube";
import * as S from "./VideoQuestion.styles.js";

const YouTubePlayer = ({ videoId }) => {
  const opts = {
    height: "188",
    width: "330",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <S.PlayerContainer>
      <YouTube videoId={videoId} opts={opts} />
    </S.PlayerContainer>
  );
};

export default YouTubePlayer;
