import useSound from "use-sound";

export const useSoundEffects = () => {
  const [playClickSound] = useSound("/sounds/click-button.mp3");

  const [playHoverSound] = useSound("/sounds/hover-small-button.mp3");

  return { playClickSound, playHoverSound };
};
