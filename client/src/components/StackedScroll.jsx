import { motion } from "framer-motion";
import Card from "./Card";

const dataCard = [
  { 
    id: 1, 
    title: "Planning",
    subtitle: "Donde nace la estrategia",
    description: "Nada transforma más que el conocimiento, y la analítica es el núcleo de esa transformación. Analizamos las interacciones de los usuarios para descubrir patrones, medir resultados y optimizar cada paso del proceso digital. Este eje asegura que las decisiones estratégicas no solo sean precisas, sino que estén respaldadas por datos confiables. En Trompo Agencia, convertimos números en historias y estadísticas en estrategias.",
    className: "card-black"
  },
  { 
    id: 2, 
    title: "Creatividad",
    subtitle: "Donde las ideas cobran vida",
    description: "Nada transforma más que el conocimiento, y la analítica es el núcleo de esa transformación. Analizamos las interacciones de los usuarios para descubrir patrones, medir resultados y optimizar cada paso del proceso digital. Este eje asegura que las decisiones estratégicas no solo sean precisas, sino que estén respaldadas por datos confiables. En Trompo Agencia, convertimos números en historias y estadísticas en estrategias.",
    className: "card-white"
  },
  { 
    id: 3, 
    title: "Social Media",
    subtitle: "Relaciones que construyen Marcas",
    description: "Nada transforma más que el conocimiento, y la analítica es el núcleo de esa transformación. Analizamos las interacciones de los usuarios para descubrir patrones, medir resultados y optimizar cada paso del proceso digital. Este eje asegura que las decisiones estratégicas no solo sean precisas, sino que estén respaldadas por datos confiables. En Trompo Agencia, convertimos números en historias y estadísticas en estrategias.",
    className: "card-grey"
  },
  { 
    id: 4, 
    title: "Audiencias",
    subtitle: "El centro de todo",
    description: "Nada transforma más que el conocimiento, y la analítica es el núcleo de esa transformación. Analizamos las interacciones de los usuarios para descubrir patrones, medir resultados y optimizar cada paso del proceso digital. Este eje asegura que las decisiones estratégicas no solo sean precisas, sino que estén respaldadas por datos confiables. En Trompo Agencia, convertimos números en historias y estadísticas en estrategias.",
    className: "card-yellow"
  },
  { 
    id: 5, 
    title: "Analítica",
    subtitle: "Decisiones basadas en datos",
    description: "Nada transforma más que el conocimiento, y la analítica es el núcleo de esa transformación. Analizamos las interacciones de los usuarios para descubrir patrones, medir resultados y optimizar cada paso del proceso digital. Este eje asegura que las decisiones estratégicas no solo sean precisas, sino que estén respaldadas por datos confiables. En Trompo Agencia, convertimos números en historias y estadísticas en estrategias.",
    className: "card-golden"
  },
];

export default function StackedScroll() {
  

  return (
    <motion.section 
      className="section-container"
      initial={{
        opacity: 0,
        scale: .5,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: .5,
        type:'tween',
      }}
    >
      <div className="cards-container">

        <h2 className="title-section">Estrategia digital aplicada</h2>
        <h1 className="subtitle-section">
          Nuestra <strong>base estratégica</strong>
        </h1>

        {Array(1).fill(null).map((_, index) =>
          Object.entries(dataCard).map(([key, {title, subtitle, description, className}]) => (
            <Card
              key={`${key}-${index}`}
              title={title}
              subtitle={subtitle}
              description={description}
              className={className}            
            />
          ))
        )}
      </div>
      
    </motion.section>
  );
}
