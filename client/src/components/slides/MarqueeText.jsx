import { motion } from "framer-motion";


const words = ["Creatividad.", "Impacto.", "Estrategia."];

const MarqueeText = ({ reverse = false }) => {
  return (
    <div className="marquee-container">
      <div className="marquee-wrapper">
        <motion.div
          className="marquee-track"
          animate={{ x: reverse ? ["0%", "-100%"] : ["0%", "100%"] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 260, ease: "linear" }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="marquee-group">
              {words.map((word, j) => (
                <span key={j} className="marquee-word">
                  {word}
                </span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default MarqueeText;