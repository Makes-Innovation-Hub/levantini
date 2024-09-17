import { useRef, useEffect } from "react";
import * as S from "./VideoQuestion.styles.js";

const YouTubePlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const loadYouTubeAPI = () => {
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    const createPlayer = () => {
      if (window.YT && window.YT.Player) {
        if (playerRef.current) {
          playerRef.current.destroy();
        }
        playerRef.current = new window.YT.Player(`youtube-player-${videoId}`, {
          height: "188",
          width: "330",
          videoId: videoId,
          playerVars: {
            autoplay: 0,
          },
        });
      } else {
        console.error("YT.Player is not available");
      }
    };

    if (!window.YT) {
      loadYouTubeAPI();
    }

    const onYouTubeIframeAPIReady = () => {
      createPlayer();
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId]);

  return (
    <S.PlayerContainer>
      <div id={`youtube-player-${videoId}`}></div>
    </S.PlayerContainer>
  );
};

export default YouTubePlayer;
