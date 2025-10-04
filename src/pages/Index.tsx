import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Hobbies from "@/components/Hobbies";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Hobbies />
      <Footer />
    </div>
  );
};

export default Index;
