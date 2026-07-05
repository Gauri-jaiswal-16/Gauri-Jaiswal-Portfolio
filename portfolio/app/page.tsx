import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import PageTransition from "@/components/PageTransition";
import SectionDivider from "@/components/SectionDivider";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollToTop from "@/components/ScrollToTop";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import AIJourney from "@/components/AIJourney";
import Projects from "@/components/Projects";
import ProjectDemos from "@/components/ProjectDemos";
import PersonalProjects from "@/components/PersonalProjects";
import GitHubActivity from "@/components/GitHubActivity";
import Creative from "@/components/Creative";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <PageTransition>
        <ScrollProgress />
        <CursorGlow />
        <Nav />
        <ScrollToTop />
        <main id="main-content">
          <Hero />
          <About />
          <SectionDivider />
          <Experience />
          <AIJourney />
          <SectionDivider />
          <Projects />
          <PersonalProjects />
          <GitHubActivity />
          <ProjectDemos />
          <Creative />
          <SectionDivider />
          <Skills />
          <Achievements />
          <SectionDivider />
          <WhyWorkWithMe />
          <Contact />
        </main>
        <Footer />
      </PageTransition>
    </>
  );
}
