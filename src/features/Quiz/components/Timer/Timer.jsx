import * as S from "./Timer.styles.js";
import { useState, useEffect } from "react";

const Timer = ({ duration, onTimerEnd }) => {
  const [progress, setProgress] = useState(100);

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
