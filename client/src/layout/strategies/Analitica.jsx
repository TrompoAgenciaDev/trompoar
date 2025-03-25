
//styles
import '../../assets/styles/card.css'
import { motion } from 'framer-motion'

function Analitica () {
  return (
    <motion.div 
      className="str-card-container"
      
    >
      <div className='card card-golden'>
        <div className="str-card-header">
          <h2>Analítica</h2>
          <span>Decisiones basadas en datos</span>
        </div>
        <div className="str-card-body">        
          <p>Nada transforma más que el conocimiento, y la analítica es el núcleo de esa transformación. Analizamos las interacciones de los usuarios para descubrir patrones, medir resultados y optimizar cada paso del proceso digital. Este eje asegura que las decisiones estratégicas no solo sean precisas, sino que estén respaldadas por datos confiables. En Trompo Agencia, convertimos números en historias y estadísticas en estrategias.</p>
        </div>
        <div className="str-card-footer">
          <img src="./card-footer.png" alt='Analítica' />
        </div>
      </div>
    </motion.div>
  );
}


export default Analitica;