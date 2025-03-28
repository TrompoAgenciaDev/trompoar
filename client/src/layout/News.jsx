import PostCard from "../components/posts/PostCard";
import SimpleSlider from '../components/slides/SimpleSlider'

//styles
import "@as/news.css";

const News = () => {
  return (
    <section className="news-section">
      <div className="news-container">
        <div className="title-section">
          <h1 className="title">
            Trompo <span className="hover-y">News</span>
          </h1>
          <div className="subtitle-section">
            <span>Novedades Digitales</span>
            <a href='/news' className="all-news-button">Ver todo</a>
          </div>
        </div>

        {/* Gallery News Component */}
        <PostCard
          initialLimit={3}
          maxLimit={3}
        />

        <div className="title-section">
          <h1 className="title">
            <span className="hover-y">Somos</span> el puente entre grandes ideas y resultados.
          </h1>
          <div className="text-section">
            <span>Marcas que confiaron en nuestra experiencia.</span>
          </div>
        </div>

        {/* Clients carrousel component */}
        <SimpleSlider
          slide="customers"
        />

      </div>
    </section>
  );
};

export default News;
