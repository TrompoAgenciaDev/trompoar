
//styles
import '../../assets/styles/card.css'
import { motion } from 'framer-motion'

function Creatividad () {
  return (
    <div className="str-card-container">
      <div className='card stikcy card-white'>
        <div className="str-card-header">
          <h2>Creatividad</h2>
          <span>Donde las ideas cobran vida</span>
        </div>
        <div className="str-card-body">        
          <p>Nada transforma más que el conocimiento, y la analítica es el núcleo de esa transformación. Analizamos las interacciones de los usuarios para descubrir patrones, medir resultados y optimizar cada paso del proceso digital. Este eje asegura que las decisiones estratégicas no solo sean precisas, sino que estén respaldadas por datos confiables. En Trompo Agencia, convertimos números en historias y estadísticas en estrategias.</p>
        </div>
        <div className="str-card-footer">
          <img src="./card-footer.png" alt='Creatividad' />
        </div>
      </div>
    </div>
  );
}

export default Creatividad;