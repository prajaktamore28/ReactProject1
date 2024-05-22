import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


import Hero from './Hero';
import Services from "./Services";
import About from "./About";
import Blog from "./Blog";
import Testimonial from "./Testimonial";
import Whychoose from "./Whychoose";
import Footer from "./Footer";
import Foot from "./Foot";

function App() {

  const services = [
    {
      photoname: "images/img-1.png",
      buttonname: "RAFTING"
    },
    {
      photoname: "images/img-2.png",
      buttonname: "HIKING"
    },
    {
      photoname: "images/img-3.png",
      buttonname: "CAMPING"
    }
  ];

  const testimonial = [
    {
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia",
      test_photo: "images/client-img.png",
      test_heading: "DAME",
      test_text: "CUSTOMER"
    }
  ];


  return (
    <section>
      <Hero />
      <Services data={services} />
      <About />
      <Blog />
      <Testimonial test_data={testimonial} />
      <Whychoose />
      <Footer />
      <Foot />
    </section>
  );
}

export default App;
