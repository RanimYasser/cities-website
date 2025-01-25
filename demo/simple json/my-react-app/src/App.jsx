import React from "react";
import Carousel from "./frontend/animations/carousel";

const slidesData = [
  {
    image: "/images/1.jpg",
    title: "Digital Twin",
  },
  {
    image: "/images/2.jpg",
    title: "Courses",
    subtitle: "See All",
  },
  {
    image: "/images/3.jpg",
    title: "Digital Design",
  },
  {
    image: "/images/4.jpg",
    title: "Digital Twin",
    subtitle: "Analytics",
  },
  {
    image: "/images/5.jpg",
    title: "Statistics",
    subtitle: "Analytics",
  },
  {
    image: "/images/6.jpg",
    title: "Statistics",
    subtitle: "Analytics",
  },
  {
    image: "/images/7.jpg",
    title: "Learn",
    subtitle: "More",
  },
];

const App = () => {
  return (
    <div>
      <Carousel slides={slidesData} loop={false} />
    </div>
  );
};

export default App;
