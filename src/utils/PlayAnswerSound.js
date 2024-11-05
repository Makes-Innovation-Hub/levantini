import correctSoundFile from "../../public/Sound/correct-6033.mp3";
import incorrectSoundFile from "../../public/Sound/fail.mp3";
import warningSound from "../../public/Sound/time-passing-sound-effect-fast-clock-108403.mp3";

export const playAnswerSound = (status) => {
  let sound;
  const volumeLevel = 0.1;

  switch (status) {
    case "correct":
      sound = new Audio(correctSoundFile);
      break;
    case "incorrect":
      sound = new Audio(incorrectSoundFile);
      break;
    case "timer":
      sound = new Audio(warningSound);
      break;
  }
  sound.volume = volumeLevel;
  sound.play();
};
