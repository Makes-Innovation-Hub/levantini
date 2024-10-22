import * as S from "./Timer.styles.js";
import { useState, useEffect } from "react";

import { playAnswerSound } from "../../../../utils/PlayAnswerSound.js";


const Timer = ({ duration, onTimerEnd, setRemainingTime }) => {
  const [progress, setProgress] = useState(100);
  const [hasPlayedSound, setHasPlayedSound] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev - 100 / duration;

        // If timer reaches 0 or below, clear the interval and call onTimerEnd
        if (newProgress <= 0) {
          clearInterval(interval);
          if (onTimerEnd) {
            onTimerEnd(); // Trigger when timer ends
          }
          return 0;
        }

        return newProgress;
      });
    }, 1000);

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
    };
  }, [duration, onTimerEnd]);

  useEffect(() => {
    if (progress <= 30 && !hasPlayedSound) {
      playAnswerSound("timer");
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
