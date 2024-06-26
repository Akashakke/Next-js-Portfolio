import Image from "next/image";
import Herosection from "./components/Herosection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container sm:max-w-[90%] mx-auto px-12 py-4">
        <Herosection />
        <AboutSection />
        <Skills />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
