// Import the sound files for correct and incorrect answers
import correctSoundFile from "./path-to-your-correct-sound.mp3"; // Replace with actual path
import incorrectSoundFile from "./path-to-your-incorrect-sound.mp3"; // Replace with actual path

// Function to handle playing sound based on the status
export const playAnswerSound = (status) => {
  let sound;

  switch (status) {
    case "correct":
      sound = new Audio(correctSoundFile);
      break;
    case "incorrect":
      sound = new Audio(incorrectSoundFile);
      break;
    default:
      console.warn("Unknown status for playing sound");
      return; // Exit if the status is unknown
  }

  // Play the corresponding sound
  sound.play();
};
