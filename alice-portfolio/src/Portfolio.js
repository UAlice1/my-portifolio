import React, { useState, useEffect } from 'react';
import { Github, Mail, Phone, Award, GraduationCap, ChevronDown, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS', 'PHP', 'Python'],
    frameworks: ['React', 'Next.js', 'Spring Boot', 'Tailwind CSS', 'Chart.js'],
    backend: ['PostgreSQL', 'REST APIs', 'JWT Auth', 'DAO Pattern', 'XAMPP'],
    tools: ['Git', 'IntelliJ IDEA', 'VS Code'],
    concepts: ['OOP', 'MVC Architecture', 'Multithreading', 'Database Normalization', 'AI']
  };

  const certifications = [
    'SheCanCode Backend Graduate',
    'SheCanCode Frontend Graduate',
    'ALX AI Essentials Graduate'
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Alice Umubyeyi
            </span>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-purple-400 transition-colors ${activeSection === section ? 'text-purple-400' : ''}`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 capitalize hover:bg-purple-900/50 rounded-md"
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 -mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Alice Umubyeyi
            </h1>
            <p className="text-2xl md:text-3xl text-purple-300 mb-6">
              Frontend & Backend Developer
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Building scalable web applications with modern technologies. Specialized in React, Next.js, Java Spring Boot, and PostgreSQL.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="mailto:aliumubyeyi123@gmail.com" className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-full transition-all transform hover:scale-105">
                <Mail size={20} />
                <span>Email Me</span>
              </a>
              <a href="https://github.com/UAlice1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-6 py-3 rounded-full transition-all transform hover:scale-105">
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
          <button onClick={() => scrollToSection('about')} className="animate-bounce">
            <ChevronDown size={32} className="text-purple-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
              <GraduationCap size={40} className="text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Education</h3>
              <p className="text-gray-300 mb-2">Bachelor of Science in Computer Science</p>
              <p className="text-purple-400 font-semibold">GPA: 4.0 / 5.0 (Ongoing)</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-purple-500/20">
              <Award size={40} className="text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Certifications</h3>
              <ul className="space-y-2">
                {certifications.map((cert, idx) => (
                  <li key={idx} className="text-gray-300 flex items-start gap-2">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20">
                <h3 className="text-xl font-bold mb-4 capitalize text-purple-400">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, idx) => (
                    <span key={idx} className="bg-purple-900/30 text-purple-300 px-3 py-1 rounded-full text-sm border border-purple-500/30">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4">
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="mailto:aliumubyeyi123@gmail.com" className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm px-8 py-4 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all transform hover:scale-105">
              <Mail size={24} className="text-purple-400" />
              <div className="text-left">
                <p className="text-sm text-gray-400">Email</p>
                <p className="text-white">aliumubyeyi123@gmail.com</p>
              </div>
            </a>
            <a href="tel:0790038006" className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm px-8 py-4 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all transform hover:scale-105">
              <Phone size={24} className="text-purple-400" />
              <div className="text-left">
                <p className="text-sm text-gray-400">Phone</p>
                <p className="text-white">0790 038 006</p>
              </div>
            </a>
            <a href="https://github.com/UAlice1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-slate-800/50 backdrop-blur-sm px-8 py-4 rounded-xl border border-purple-500/20 hover:border-purple-400/40 transition-all transform hover:scale-105">
              <Github size={24} className="text-purple-400" />
              <div className="text-left">
                <p className="text-sm text-gray-400">GitHub</p>
                <p className="text-white">@UAlice1</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 py-8 text-center text-gray-400">
        <p>©  Alice Umubyeyi</p>
      </footer>
    </div>
  );
}