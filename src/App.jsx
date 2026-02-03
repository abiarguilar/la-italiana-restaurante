import Header from "./components/Header";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Menu from "./sections/Menu";
import Gallery from "./sections/Gallery";
import Location from "./sections/Location";
import CTA from "./sections/CTA";

import { menu } from "./data/menu";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Menu items={menu} />
      <Gallery />
      <Location />
      <CTA />
      <Footer />
    </>
  );
}
