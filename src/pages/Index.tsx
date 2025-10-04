import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Hobbies from "@/components/Hobbies";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Hobbies />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Index;
