import React, { useState, useEffect } from 'react';
import {
  Github,
  Mail,
  Phone,
  Award,
  GraduationCap,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  Code2,
  Layers,
  Database,
  Wrench,
  Brain,
  MapPin,
} from 'lucide-react';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const NAV_LINKS = ['home', 'about', 'skills', 'projects', 'contact'];

const SKILLS = {
  Languages:   { icon: Code2,     items: ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL', 'Java', 'Python'] },
  Frameworks:  { icon: Layers,    items: ['React', 'Next.js', 'Express.js', 'Spring Boot', 'Tailwind CSS'] },
  Backend:     { icon: Database,  items: ['Node.js', 'PostgreSQL', 'REST APIs', 'JWT Auth', 'API Design'] },
  Tools:       { icon: Wrench,    items: ['Git', 'VS Code', 'IntelliJ IDEA'] },
  Concepts:    { icon: Brain,     items: ['OOP', 'MVC Architecture', 'Database Normalization', 'AI'] },
};

const CERTIFICATIONS = [
  'SheCanCode Backend Graduate',
  'SheCanCode Frontend Graduate',
  'ALX AI Essentials Graduate',
];

const PROJECTS = [
  {
    title: 'Personal Portfolio',
    description:
      'A fully responsive developer portfolio built with React and Tailwind CSS, featuring smooth scroll navigation, dynamic sections, and a Node.js backend for profile data.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'Express'],
    github: 'https://github.com/UAlice1',
    live: null,
    gradient: 'from-cyan-500/20 to-blue-500/20',
    border: 'border-cyan-700/40',
  },
  {
    title: 'Full-Stack Web App',
    description:
      'A full-stack application with user authentication, RESTful API design, and a PostgreSQL database. Implements JWT-based auth and MVC architecture.',
    tech: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    github: 'https://github.com/UAlice1',
    live: null,
    gradient: 'from-violet-500/20 to-purple-500/20',
    border: 'border-violet-700/40',
  },
  {
    title: 'Spring Boot API',
    description:
      'A RESTful backend service built with Spring Boot and Java, featuring clean layered architecture, data persistence, and comprehensive endpoint design.',
    tech: ['Java', 'Spring Boot', 'REST API', 'OOP'],
    github: 'https://github.com/UAlice1',
    live: null,
    gradient: 'from-emerald-500/20 to-teal-500/20',
    border: 'border-emerald-700/40',
  },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profile] = useState({
    name: 'Alice Umubyeyi',
    title: 'Full-Stack Developer',
    subtitle: 'Frontend · Backend · API Design',
    summary:
      'I build clean, performant web applications from pixel-perfect UIs to robust backend systems. Passionate about writing maintainable code and delivering real value.',
    location: 'Rwanda',
  });

  /* scroll spy */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = NAV_LINKS.map((id) => document.getElementById(id));
      const current = sections.find((el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      if (current) setActiveSection(current.id);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1e] text-white font-sans antialiased">

      {/* ── NAV ── */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0f1e]/95 backdrop-blur-xl shadow-xl shadow-black/40 border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="text-lg font-bold tracking-tight"
          >
            <span className="text-white">Alice</span>
            <span className="text-cyan-400">.</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={`px-4 py-2 rounded-lg text-sm capitalize transition-all duration-200 ${
                  activeSection === s
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {s}
              </button>
            ))}
            <a
              href="mailto:aliumubyeyi123@gmail.com"
              className="ml-4 px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-semibold rounded-lg transition-all duration-200"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0f1e]/98 backdrop-blur-xl border-t border-white/5">
            <div className="px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((s) => (
                <button
                  key={s}
                  onClick={() => scrollTo(s)}
                  className={`text-left px-4 py-3 rounded-lg capitalize text-sm transition-all ${
                    activeSection === s
                      ? 'text-cyan-400 bg-cyan-400/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {s}
                </button>
              ))}
              <a
                href="mailto:aliumubyeyi123@gmail.com"
                className="mt-2 px-4 py-3 bg-cyan-500 text-slate-950 text-sm font-semibold rounded-lg text-center"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        id="home"
        className="min-h-screen flex items-center px-6 lg:px-8 pt-16"
      >
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto w-full relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Text side */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                Available for opportunities
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Hi, I'm{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {profile.name.split(' ')[0]}
                </span>
                <br />
                <span className="text-white">{profile.name.split(' ')[1]}</span>
              </h1>

              <p className="text-xl text-cyan-300 font-medium mb-2">{profile.title}</p>
              <p className="text-sm text-slate-500 mb-6 tracking-widest uppercase">{profile.subtitle}</p>

              <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
                {profile.summary}
              </p>

              <div className="flex items-center gap-2 text-slate-500 text-sm mb-8">
                <MapPin size={14} className="text-cyan-400" />
                <span>{profile.location}</span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="mailto:aliumubyeyi123@gmail.com"
                  className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/25"
                >
                  <Mail size={16} />
                  Get In Touch
                </a>
                <a
                  href="https://github.com/UAlice1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200"
                >
                  <Github size={16} />
                  View GitHub
                </a>
              </div>
            </div>

            {/* Photo side */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 blur-md opacity-30 scale-105" />
                <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
                  <img
                    src="/Alice.jpeg"
                    alt="Alice Umubyeyi — Full-Stack Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-2 -right-2 bg-[#0a0f1e] border border-cyan-400/30 rounded-2xl px-4 py-2 shadow-xl">
                  <p className="text-xs text-slate-400">GPA</p>
                  <p className="text-lg font-bold text-cyan-400">4.0 / 5.0</p>
                </div>
              </div>
            </div>

          </div>

          {/* Scroll cue */}
          <div className="flex justify-center mt-16 lg:mt-24">
            <button
              onClick={() => scrollTo('about')}
              className="flex flex-col items-center gap-2 text-slate-600 hover:text-cyan-400 transition-colors group"
            >
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <ChevronDown size={20} className="animate-bounce" />
            </button>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="About Me" title="Background & Education" />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {/* Education card */}
            <div className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/8 hover:border-cyan-400/30 rounded-2xl p-8 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center mb-6">
                <GraduationCap size={24} className="text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-1">Education</h3>
              <p className="text-slate-400 text-sm mb-4">Computer Science</p>
              <p className="text-slate-300 font-medium">Bachelor of Science in Computer Science</p>
              <div className="mt-4 inline-flex items-center gap-2 bg-cyan-400/10 text-cyan-400 text-sm px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                GPA: 4.0 / 5.0 · Ongoing
              </div>
            </div>

            {/* Certifications card */}
            <div className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/8 hover:border-violet-400/30 rounded-2xl p-8 transition-all duration-300">
              <div className="w-12 h-12 bg-violet-400/10 rounded-xl flex items-center justify-center mb-6">
                <Award size={24} className="text-violet-400" />
              </div>
              <h3 className="text-xl font-bold mb-1">Certifications</h3>
              <p className="text-slate-400 text-sm mb-4">Professional development</p>
              <ul className="space-y-3">
                {CERTIFICATIONS.map((cert, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="mt-0.5 w-5 h-5 bg-violet-400/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-violet-400 text-xs">✓</span>
                    </span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-24 px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Skills" title="Technical Expertise" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {Object.entries(SKILLS).map(([category, { icon: Icon, items }]) => (
              <div
                key={category}
                className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/8 hover:border-cyan-400/20 rounded-2xl p-6 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 bg-cyan-400/10 rounded-lg flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                    <Icon size={18} className="text-cyan-400" />
                  </div>
                  <h3 className="font-semibold text-white">{category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-slate-800/80 text-slate-300 text-xs px-3 py-1.5 rounded-lg border border-white/5 hover:border-cyan-400/30 hover:text-cyan-300 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader label="Projects" title="What I've Built" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {PROJECTS.map((project, i) => (
              <div
                key={i}
                className={`relative bg-gradient-to-br ${project.gradient} border ${project.border} rounded-2xl p-6 flex flex-col gap-4 hover:scale-[1.02] transition-all duration-300 group`}
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <div className="flex gap-2">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={14} className="text-slate-400" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      aria-label="GitHub repository"
                    >
                      <Github size={14} className="text-slate-400" />
                    </a>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {project.tech.map((t, j) => (
                    <span
                      key={j}
                      className="text-xs text-slate-400 bg-black/20 px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 text-sm mt-8">
            More projects on{' '}
            <a
              href="https://github.com/UAlice1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              GitHub →
            </a>
          </p>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 px-6 lg:px-8 bg-white/[0.02]">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader label="Contact" title="Let's Work Together" />

          <p className="text-slate-400 text-lg leading-relaxed mt-6 mb-12">
            I'm open to frontend, backend, and full-stack roles where quality and
            reliability matter. Feel free to reach out — I'd love to connect.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <ContactCard
              icon={<Mail size={20} className="text-cyan-400" />}
              label="Email"
              value="aliumubyeyi123@gmail.com"
              href="mailto:aliumubyeyi123@gmail.com"
            />
            <ContactCard
              icon={<Phone size={20} className="text-cyan-400" />}
              label="Phone"
              value="0790 038 006"
              href="tel:0790038006"
            />
            <ContactCard
              icon={<Github size={20} className="text-cyan-400" />}
              label="GitHub"
              value="@UAlice1"
              href="https://github.com/UAlice1"
              external
            />
          </div>

          <a
            href="mailto:aliumubyeyi123@gmail.com"
            className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-xl font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            <Mail size={18} />
            Send Me an Email
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>
            © {new Date().getFullYear()}{' '}
            <span className="text-slate-300">Alice Umubyeyi</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/UAlice1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:aliumubyeyi123@gmail.com"
              className="hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}

/* ─────────────────────────────────────────────
   REUSABLE COMPONENTS
───────────────────────────────────────────── */
function SectionHeader({ label, title }) {
  return (
    <div className="text-center">
      <span className="text-xs font-semibold tracking-widest uppercase text-cyan-400">
        {label}
      </span>
      <h2 className="text-3xl lg:text-4xl font-bold text-white mt-2">{title}</h2>
      <div className="mt-4 mx-auto w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full" />
    </div>
  );
}

function ContactCard({ icon, label, value, href, external }) {
  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="flex flex-col items-center gap-3 bg-white/[0.03] hover:bg-white/[0.06] border border-white/8 hover:border-cyan-400/30 rounded-2xl p-6 transition-all duration-300 group"
    >
      <div className="w-10 h-10 bg-cyan-400/10 rounded-xl flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
        {icon}
      </div>
      <div className="text-center">
        <p className="text-xs text-slate-500 mb-1">{label}</p>
        <p className="text-sm text-white font-medium break-all">{value}</p>
      </div>
    </a>
  );
}
