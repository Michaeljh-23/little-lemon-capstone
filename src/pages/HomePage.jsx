import Cta from "../components/Cta";
import FoodCards from "../components/FoodCards";
import Hero from "../components/Hero";
import Testimonials from "../components/Testimonials";
import About from "../components/About";

const HomePage = () => {
  return (
    <>
      <div className="green">
        <Hero />
      </div>
      <FoodCards />
      <div className="green">
        <Cta />
      </div>
      <Testimonials />
      <About />
    </>
  );
};

export default HomePage;
