import correctSoundFile from "../../public/Sound/correct-6033.mp3";
import incorrectSoundFile from "../../public/Sound/buzzer-or-wrong-answer-20582.mp3";//s

export const playAnswerSound = (status) => {
  let sound;

  switch (status) {
    case "correct":
      sound = new Audio(correctSoundFile);
      break;
    case "incorrect":
      sound = new Audio(incorrectSoundFile);
      break;
  }

  sound.play();
};
