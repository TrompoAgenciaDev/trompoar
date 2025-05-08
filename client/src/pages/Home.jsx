import Hero from "../layout/Hero";
import PostHero from "../layout/PostHero.jsx";
import Portfolio from '../layout/Portfolio.jsx'
import News from "../layout/News.jsx";
import Contact from "../layout/Contact.jsx";

const Home = () => {
  return (
    <main>
      <Hero/>
      <PostHero/>      
      <Portfolio/>
      <News/>
      <Contact/>
    </main>
  );
};

export default Home;