import PostCard from "./posts/PostCard";

import "@as/preFooter.css";

const News = () => {
  return (
    <section className="news-section">
      <div className="title-section">
        <h1 className="title">
          Trompo <b>News</b>
        </h1>
        <div className="subtitle-section">
          <span>Novedades Digitales</span>
          <a className="all-news-button" href="">Ver todo</a>
        </div>
      </div>

      {/* Gallery News Component */}
      <PostCard
        initialLimit={3}
        maxLimit={3}
      />

      <div className="title-section">
        <h1 className="title">
          <b>Somos</b> el puente entre grandes ideas y resultados.
        </h1>
        <div className="subtitle-section">
          <span>Marcas que confiaron en nuestra experiencia.</span>
        </div>
      </div>


      {/* Clients carrousel component */}

    </section>
  );
};

export default News;
