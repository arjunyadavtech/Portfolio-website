import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import MainLayout from "../layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
        <Hero />
        <Projects />
        <About />
        <Contact />
    </MainLayout>
  ) 
};

export default Home;