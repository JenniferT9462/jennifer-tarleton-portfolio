// import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Projects from "@/components/Projects";
import ContactForm from "@/components/ContactForm";
import AboutMe from "@/components/AboutMe";
import BlogList from "@/components/BlogList";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* <Head>
        <title>Jennifer | Portfolio</title>
        <meta name="description" content="Portfolio of Jennifer, a full-stack developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <BlogList />
      <ContactForm />
      <Footer />
    </div>
  );
}
