import React from "react";
import { Hero } from "../components/Hero";
import { ServicesList } from "../components/Services";
import { AnimatedSection } from "../components/AnimatedSection";
import image from "../assets/back1.jpg";
const services = [
  {
    title: "Primary education",
    text:
      "You will learn primary education.",
    color: "F1F11E",
    image: require("../assets/back.jpg"),
    gradient: ["#D68800", "#CB5555"]
  },
  // {
  //   title: "Fashion Design",
  //   text:
  //     "You will learn fundamentals of interior design, tools and theories used to kickstart your career in this space",
  //   color: "27F8E8",
  //   image: require("../assets/blue.jpg"),
  //   gradient: ["#0054D6", "#55ACCB"]
  // },
  // {
  //   title: "Graphic Design",
  //   text:
  //     "You will learn fundamentals of interior design, tools and theories used to kickstart your career in this space",
  //   color: "EF78E8",
  //   image: require("../assets/purple.jpg"),
  //   gradient: ["#D600D6", "#A455CB"]
  // }
];

const Home = () => (
  <div>
    <Hero title1="Hmghaswala" title2="School" image={image} />
    <AnimatedSection>
      <ServicesList items={services} />
    </AnimatedSection>
  </div>
);

export default Home;
