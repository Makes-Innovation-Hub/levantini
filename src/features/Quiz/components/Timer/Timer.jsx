import * as S from "./Timer.styles.js";
import { useState, useEffect } from "react";

const Timer = ({ duration, onTimerEnd, setRemainingTime }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    let timeLeft = duration;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          if (onTimerEnd) {
            onTimerEnd();
          }
          return 0;
        }
        timeLeft -= 1; // Decrease remaining time
        setRemainingTime(timeLeft); // Update remaining time in Quiz component
        return prev - 100 / duration;
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [duration, onTimerEnd, setRemainingTime]);

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
