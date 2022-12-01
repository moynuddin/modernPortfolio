import Head from "next/head";
import Image from "next/image";
import About from "../Components/About";
import Contacts from "../Components/Contacts";
import Experience from "../Components/Experience";
import Hero from "../Components/Hero";
import NavBar from "../Components/NavBar";
import Skills from "../Components/Skills";

export default function Home() {
  return (
    <div className="bg-teal-900 h-screen snap-y snap-mandatory overflow-scroll overflow-x-hidden z-0">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />

      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <section id="about" className="snap-start">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <Experience />
      </section>
      <section id="skill" className="snap-center">
        <Skills />
      </section>
      <section className="snap-center">
        <Contacts />
      </section>
    </div>
  );
}
