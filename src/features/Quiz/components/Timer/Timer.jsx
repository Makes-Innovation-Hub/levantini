import * as S from "./Timer.styles.js";
import { useState, useEffect } from "react";
import warningSound from "../../../../../public/Sound/time-passing-sound-effect-fast-clock-108403.mp3";

const Timer = ({ duration, onTimerEnd }) => {
  const [progress, setProgress] = useState(100);
  const [hasPlayedSound, setHasPlayedSound] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          if (onTimerEnd) {
            onTimerEnd();
          }
          return 0;
        }
        return prev - 100 / duration;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [duration, onTimerEnd]);

  useEffect(() => {
    if (progress <= 20 && !hasPlayedSound) {
      const sound = new Audio(warningSound);
      sound.play();
      setHasPlayedSound(true);
    }
  }, [progress, hasPlayedSound]);

  return (
    <S.Container>
      <S.TimerContainer>
        <S.ProgressBar $progress={progress} />
      </S.TimerContainer>
      <S.TimerIcon $progress={progress} />
    </S.Container>
  );
};

export default Timer;
