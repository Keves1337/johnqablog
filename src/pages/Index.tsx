import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Hobbies from "@/components/Hobbies";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Hobbies />
      <Footer />
    </div>
  );
};

export default Index;
