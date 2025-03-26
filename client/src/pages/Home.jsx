import Hero from "../layout/Hero";
import PostHero from "../layout/PostHero.jsx";
import Portfolio from '../layout/Portfolio.jsx'
import News from "../layout/News.jsx";
import Contact from "../layout/Contact.jsx";
import ExtraTitleSection from "../layout/ExtraTitleSection.jsx";

const Home = () => {
  return (
    <main>
      <Hero/>
      <PostHero/>
      <ExtraTitleSection/>      
      <Portfolio/>
      <News/>
      <Contact/>
    </main>
  );
};

export default Home;