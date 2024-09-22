import YouTube from "react-youtube";
import * as S from "./VideoQuestion.styles.js";

const YouTubePlayer = ({ videoId, height, width, autoplay }) => {
  const opts = {
    height: height,
    width: width,
    playerVars: {
      autoplay: autoplay,
    },
  };

  return (
    <S.PlayerContainer>
      <YouTube videoId={videoId} opts={opts} />
    </S.PlayerContainer>
  );
};

export default YouTubePlayer;
