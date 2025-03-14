import '../assets/styles/card.css';

function Card({ title, subtitle, description, className }) {
  return (
    <div className={`card ${className}`}>
      <div className="card-header">
        <h2>{title}</h2>
        <span>{subtitle}</span>
      </div>
      <div className="card-body">        
        <p>{description}</p>
      </div>
      <div className="card-footer">
        <img src="./card-footer.png" alt={title} />
      </div>
    </div>
  );
}

export default Card;