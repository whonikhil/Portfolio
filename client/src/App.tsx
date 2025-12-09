import { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education'; // Imported here
import Photography from './components/sections/Photography';
import VideoShowcase from './components/sections/VideoShowcase';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import ProjectModal from './components/modal/ProjectModal';
import type { Project } from './globalTypes';

function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 font-sans">
      <Navbar />
      <main>
        <Hero />
        <Projects onProjectClick={handleOpenModal} />
        <Photography />
        <VideoShowcase />
        <About />

        {/* THIS IS THE MISSING LINE THAT FIXES THE IMPORT ERROR */}
        <Education />

        <Testimonials />
        <Contact />
      </main>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;