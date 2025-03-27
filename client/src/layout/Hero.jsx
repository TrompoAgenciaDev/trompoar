// Hook
import { useHeroImages } from "../hooks/useHeroImage";

// Styles
import "@as/hero.css";

const Hero = ({ location = "home" }) => {
  const [heroImagePng, heroImageWebp] = useHeroImages(location);

  return (
    <div
      className="hero-container container"
      style={{
        backgroundImage: `image-set(
          url(${heroImageWebp}) type("image/webp"),
          url(${heroImagePng}) type("image/png")
        )`,
      }}
    ></div>
  );
};

export default Hero;
