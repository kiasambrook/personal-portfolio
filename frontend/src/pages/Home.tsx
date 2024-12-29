import Hero from "@components/Hero";
import Skills from "@features/Skills";
import Projects from "@features/Projects";
import Timeline from "@features/Timeline";


const Home = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Timeline />
    </>
  );
};

export default Home;