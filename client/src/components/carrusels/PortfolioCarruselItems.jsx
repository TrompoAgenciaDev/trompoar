import '../assets/styles/portfolio-items.css'


function PortfolioCarruselItem({id, title, backgroundImage, enlacePortfolio}) {
  return (
    <a href={enlacePortfolio} data-id={id} className="portfolio-card">
      <div className="portfolio-card" style={{backgroundImage: `url(${backgroundImage})`}}>
        <h2 className='portfolio-title'>{title}</h2>
      </div>
    </a>
  );
}


export default PortfolioCarruselItem;