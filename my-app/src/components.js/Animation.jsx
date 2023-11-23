import { TypeAnimation } from "react-type-animation";

const Animation = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Mazen Milibari",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "CSS Student",
        1000,
        "Web Developer",
        1000,
        "Leader of Keptar",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  );
};

export default Animation;
