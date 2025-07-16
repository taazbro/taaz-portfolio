import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Brain, Zap, Users, Target, Code, Rocket, Globe, Award, BookOpen, ArrowRight, Menu, X, Sun, Moon, Activity, Cpu, Shield, Database } from 'lucide-react';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'about', 'vezran', 'expertise', 'portfolio', 'investor', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  // Floating particles component
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`absolute w-1 h-1 rounded-full animate-pulse ${
            darkMode ? 'bg-cyan-400 opacity-30' : 'bg-cyan-500 opacity-35'
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${2 + Math.random() * 3}s`
          }}
        />
      ))}
    </div>
  );

  // Neural network background
  const NeuralNetwork = () => (
    <div className="absolute inset-0 opacity-10">
      <svg className="w-full h-full" viewBox="0 0 800 600">
        {[...Array(15)].map((_, i) => (
          <g key={i}>
            <circle
              cx={Math.random() * 800}
              cy={Math.random() * 600}
              r="2"
              fill={darkMode ? "cyan" : "#0e7490"}
              className="animate-pulse"
            />
            <line
              x1={Math.random() * 800}
              y1={Math.random() * 600}
              x2={Math.random() * 800}
              y2={Math.random() * 600}
              stroke={darkMode ? "cyan" : "#0e7490"}
              strokeWidth="0.5"
              opacity={darkMode ? "0.3" : "0.35"}
            />
          </g>
        ))}
      </svg>
    </div>
  );

  const NavLink = ({ href, children, mobile = false }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`${
        mobile ? 'block w-full text-left px-4 py-2' : 'relative'
      } text-sm font-medium transition-all duration-300 ${
        activeSection === href
          ? 'text-cyan-400 glow-text'
          : 'text-gray-300 hover:text-cyan-300'
      } group hover:scale-105`}
    >
      {children}
      {!mobile && activeSection === href && (
        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/50" />
      )}
    </button>
  );

  const GlowCard = ({ children, className = "", hover = true }) => (
    <div className={`
      relative overflow-hidden rounded-xl backdrop-blur-sm
      ${darkMode 
        ? 'border border-gray-700/50 bg-gray-800/50' 
        : 'border border-gray-400/30 bg-gray-50/80 shadow-md'
      }
      ${hover ? (darkMode 
        ? 'hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20' 
        : 'hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/25'
      ) : ''}
      transition-all duration-500 group ${className}
    `}>
      <div className={`absolute inset-0 ${
        darkMode 
          ? 'bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-cyan-600/5' 
          : 'bg-gradient-to-r from-blue-600/8 via-purple-600/8 to-cyan-600/8'
      }`} />
      <div className="relative z-10">
        {children}
      </div>
      {hover && (
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute inset-0 ${
            darkMode 
              ? 'bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10' 
              : 'bg-gradient-to-r from-cyan-500/12 via-transparent to-blue-500/12'
          }`} />
        </div>
      )}
    </div>
  );

  const TypewriterText = ({ text, delay = 0 }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        if (currentIndex < text.length) {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }
      }, 100 + delay);

      return () => clearTimeout(timer);
    }, [currentIndex, text, delay]);

    return (
      <span className="font-mono">
        {displayText}
        <span className="animate-pulse text-cyan-400">|</span>
      </span>
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Custom CSS styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .glow-text {
          text-shadow: 0 0 10px currentColor;
        }
        .neural-bg {
          background-image: 
            radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
        }
        .matrix-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(90deg, transparent 24%, rgba(6, 182, 212, 0.03) 25%, rgba(6, 182, 212, 0.03) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.03) 75%, rgba(6, 182, 212, 0.03) 76%, transparent 77%, transparent),
            linear-gradient(transparent 24%, rgba(6, 182, 212, 0.03) 25%, rgba(6, 182, 212, 0.03) 26%, transparent 27%, transparent 74%, rgba(6, 182, 212, 0.03) 75%, rgba(6, 182, 212, 0.03) 76%, transparent 77%, transparent);
          background-size: 40px 40px;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); }
          50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.6); }
        }
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        `
      }} />

      {/* Mouse follower */}
      <div 
        className="fixed pointer-events-none z-50 w-6 h-6 rounded-full border border-cyan-400/50 transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          background: `radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)`
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? `${darkMode ? 'bg-gray-900/90' : 'bg-white/90'} backdrop-blur-md border-b border-cyan-500/20`
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold font-mono bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent glow-text">
                TAAZ
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <NavLink href="hero">Home</NavLink>
              <NavLink href="about">About</NavLink>
              <NavLink href="vezran">Vezran</NavLink>
              <NavLink href="expertise">Skills</NavLink>
              <NavLink href="portfolio">Projects</NavLink>
              <NavLink href="investor">Investors</NavLink>
              <NavLink href="contact">Contact</NavLink>
              
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 border border-cyan-500/30' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {darkMode ? <Sun size={16} className="text-cyan-400" /> : <Moon size={16} />}
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-all duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 border border-cyan-500/30' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {darkMode ? <Sun size={16} className="text-cyan-400" /> : <Moon size={16} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-all duration-300 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 border border-cyan-500/30' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                {mobileMenuOpen ? <X size={20} className="text-cyan-400" /> : <Menu size={20} className="text-cyan-400" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className={`md:hidden py-4 border-t ${darkMode ? 'border-cyan-500/20' : 'border-gray-200'} backdrop-blur-md`}>
              <NavLink href="hero" mobile>Home</NavLink>
              <NavLink href="about" mobile>About</NavLink>
              <NavLink href="vezran" mobile>Vezran</NavLink>
              <NavLink href="expertise" mobile>Skills</NavLink>
              <NavLink href="portfolio" mobile>Projects</NavLink>
              <NavLink href="investor" mobile>Investors</NavLink>
              <NavLink href="contact" mobile>Contact</NavLink>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden matrix-bg neural-bg">
        <FloatingParticles />
        <NeuralNetwork />
        
        {/* Animated background grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'float 20s ease-in-out infinite'
          }} />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full text-cyan-400 text-sm font-mono mb-6 border border-cyan-500/30 pulse-glow">
              AI Founder & Cybersecurity Expert
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent glow-text">
              TANJIM AHMED
            </span>
            <br />
            <span className={`font-mono ${darkMode ? 'text-white' : 'text-gray-900'}`}>AL ZABEER</span>
          </h1>
          
          <div className="mb-8">
            <p className={`text-xl md:text-2xl mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              <TypewriterText text="Founder & CEO @ Vezran™" delay={0} />
            </p>
            <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-500'} font-mono`}>
              <TypewriterText text="Privacy and security first Super-AI ecosystem + Complete automation across platforms" delay={100} />
            </p>
            <p className={`text-sm ${darkMode ? 'text-cyan-400' : 'text-cyan-600'} font-mono mt-2`}>
              <TypewriterText text="Bay_Area.expanding()" delay={200} />
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://www.vezran.com"
              target="_blank"
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 border border-cyan-400/30"
            >
              <span className="flex items-center space-x-2">
                <Cpu size={20} />
                <span>Explore Vezran</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>
            <button
              onClick={() => scrollToSection('vezran')}
              className={`group px-8 py-4 border-2 border-cyan-500/50 rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 ${darkMode ? 'text-cyan-300' : 'text-cyan-600'}`}
            >
              <span className="flex items-center space-x-2 font-mono">
                <Database size={20} />
                <span>Vezran Info</span>
              </span>
            </button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="#" className={`group p-4 rounded-full border transition-all duration-300 hover:scale-110 ${
              darkMode 
                ? 'bg-gray-800/60 border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20' 
                : 'bg-gray-50/70 border-cyan-400/40 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-400/30'
            }`}>
              <Github size={20} className={`${darkMode ? 'text-cyan-400 group-hover:text-cyan-300' : 'text-cyan-600 group-hover:text-cyan-700'}`} />
            </a>
            <a href="https://www.linkedin.com/in/taazbro/" target="_blank" className={`group p-4 rounded-full border transition-all duration-300 hover:scale-110 ${
              darkMode 
                ? 'bg-gray-800/60 border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20' 
                : 'bg-gray-50/70 border-cyan-400/40 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-400/30'
            }`}>
              <Linkedin size={20} className={`${darkMode ? 'text-cyan-400 group-hover:text-cyan-300' : 'text-cyan-600 group-hover:text-cyan-700'}`} />
            </a>
            <a href="https://x.com/t_a_a_z" target="_blank" className={`group p-4 rounded-full border transition-all duration-300 hover:scale-110 ${
              darkMode 
                ? 'bg-gray-800/60 border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20' 
                : 'bg-gray-50/70 border-cyan-400/40 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-400/30'
            }`}>
              <svg className={`w-5 h-5 ${darkMode ? 'text-cyan-400 group-hover:text-cyan-300' : 'text-cyan-600 group-hover:text-cyan-700'}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/ta_a_z/" target="_blank" className={`group p-4 rounded-full border transition-all duration-300 hover:scale-110 ${
              darkMode 
                ? 'bg-gray-800/60 border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20' 
                : 'bg-gray-50/70 border-cyan-400/40 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-400/30'
            }`}>
              <svg className={`w-5 h-5 ${darkMode ? 'text-cyan-400 group-hover:text-cyan-300' : 'text-cyan-600 group-hover:text-cyan-700'}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="mailto:taaz@vezran.com" className={`group p-4 rounded-full border transition-all duration-300 hover:scale-110 ${
              darkMode 
                ? 'bg-gray-800/60 border-cyan-500/30 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20' 
                : 'bg-gray-50/70 border-cyan-400/40 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-400/30'
            }`}>
              <Mail size={20} className={`${darkMode ? 'text-cyan-400 group-hover:text-cyan-300' : 'text-cyan-600 group-hover:text-cyan-700'}`} />
            </a>
          </div>
        </div>
        
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown size={24} className="text-cyan-400 glow-text" />
        </button>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 relative overflow-hidden ${darkMode ? 'bg-gray-800/30' : 'bg-gray-200/40'}`}>
        <div className="absolute inset-0 neural-bg opacity-30" />
        <FloatingParticles />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-mono">
              About Tanjim
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto font-mono`}>
              Founder & operator focused on next-generation AI infrastructure, 
              driving a small, senior team to solve hard security and scalability problems.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400 font-mono">
                AI Automation & Security Expert
              </h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
                AI & Cybersecurity Researcher leading VEZRAN's mission to create the world's first privacy-first Super-AI ecosystem. 
                Building something for everyone—from 10-year-old students to global enterprises—so every person, brand, and nation 
                can benefit from safe, sovereign intelligence. Expert in complete AI automation across multiple platforms and models, 
                with expertise in LangChain, N*N frameworks, Zapier integrations, and pro-level LLMs including GPT, Claude, Grok, and Mistral. 
                Currently developing advanced skills in AI engineering and architecture. 
                <span className="text-cyan-400 font-mono">I prefer results over noise.</span>
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <Brain className="text-cyan-400 group-hover:scale-110 transition-transform" size={20} />
                  <span className="font-mono">AI Automation & Multi-Platform Integration</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Shield className="text-purple-400 group-hover:scale-110 transition-transform" size={20} />
                  <span className="font-mono">Cybersecurity & Penetration Testing</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Code className="text-pink-400 group-hover:scale-110 transition-transform" size={20} />
                  <span className="font-mono">AI Engineering & Architecture (Learning)</span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <Users className="text-green-400 group-hover:scale-110 transition-transform" size={20} />
                  <span className="font-mono">Leadership & Enterprise Solutions</span>
                </div>
              </div>
            </div>
            
            <GlowCard className="bg-gray-800/50 p-8">
              <h4 className="text-xl font-semibold mb-6 text-cyan-400 font-mono">Key Achievements</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Award className="text-yellow-400 mt-1 animate-pulse" size={16} />
                  <div>
                    <h5 className="font-medium font-mono">Vezran Inc. Founded</h5>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} font-mono`}>
                      Delaware C-Corp with CTO advisory council
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Brain className="text-blue-400 mt-1 animate-pulse" size={16} />
                  <div>
                    <h5 className="font-medium font-mono">AI Automation Expert</h5>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} font-mono`}>
                      Complete automation across multiple AI platforms
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Shield className="text-green-400 mt-1 animate-pulse" size={16} />
                  <div>
                    <h5 className="font-medium font-mono">5+ Critical Vulnerabilities</h5>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} font-mono`}>
                      Discovered in servers and web applications
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Code className="text-purple-400 mt-1 animate-pulse" size={16} />
                  <div>
                    <h5 className="font-medium font-mono">30% Efficiency Improvement</h5>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'} font-mono`}>
                      Through Python automation & AI workflows
                    </p>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
          
          <div className="text-center mt-12">
            <a href="https://www.vezran.com" target="_blank" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 font-mono border border-cyan-400/30 inline-flex items-center space-x-2">
              <Activity size={16} className="animate-pulse" />
              <span>Explore VEZRAN Ecosystem</span>
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Vezran Section */}
      <section id="vezran" className="py-20 relative overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 neural-bg opacity-20" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-mono">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent glow-text">
                VEZRAN™
              </span>
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto font-mono`}>
              Secure-by-default infrastructure for enterprise-grade AI deployment. 
              <br />
              <span className="text-cyan-400">Turning complex compute into intuitive, trustworthy products.</span>
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <GlowCard className={`${darkMode ? 'bg-gray-800/40' : 'bg-gray-50/80'} p-6 float-animation`}>
              <Brain className="text-cyan-400 mb-4 pulse-glow" size={32} />
              <h3 className="text-xl font-semibold mb-3 font-mono text-cyan-300">Enterprise AI Security</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} font-mono text-sm leading-relaxed`}>
                Building secure-by-default infrastructure that enterprises can trust 
                for their most critical AI deployments.
              </p>
            </GlowCard>
            
            <GlowCard className={`${darkMode ? 'bg-gray-800/40' : 'bg-gray-50/80'} p-6 float-animation`} style={{ animationDelay: '2s' }}>
              <Zap className="text-purple-400 mb-4 pulse-glow" size={32} />
              <h3 className="text-xl font-semibold mb-3 font-mono text-purple-300">Strategic Partnerships</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} font-mono text-sm leading-relaxed`}>
                Working with design partners across multiple SaaS verticals 
                to validate and improve our solutions.
              </p>
            </GlowCard>
            
            <GlowCard className={`${darkMode ? 'bg-gray-800/40' : 'bg-gray-50/80'} p-6 float-animation`} style={{ animationDelay: '4s' }}>
              <Target className="text-pink-400 mb-4 pulse-glow" size={32} />
              <h3 className="text-xl font-semibold mb-3 font-mono text-pink-300">Scalable Architecture</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} font-mono text-sm leading-relaxed`}>
                Multidisciplinary engineering covering backend, ML, and product design 
                with rigorous corporate governance.
              </p>
            </GlowCard>
          </div>
          
          <GlowCard className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-8 border-cyan-500/30">
            <h3 className="text-2xl font-semibold mb-4 font-mono text-cyan-400">Our Mission</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed mb-6 font-mono`}>
              At Vezran, we're solving the hard security and scalability problems that prevent enterprises 
              from fully leveraging AI. We build lean, distributed engineering cultures that outperform, 
              and partner with technical leaders to pressure-test real-world needs. 
              <span className="text-cyan-400">Equal parts strategy and execution—quietly, quickly, and with long-term discipline.</span>
            </p>
            <button className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center space-x-2 font-mono border border-cyan-400/30">
              <Activity size={16} className="animate-pulse" />
              <span>Learn More</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </GlowCard>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className={`py-20 relative overflow-hidden ${darkMode ? 'bg-gray-800/30' : 'bg-gray-200/40'}`}>
        <FloatingParticles />
        <div className="absolute inset-0 matrix-bg opacity-20" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-mono">
              Technical Expertise
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto font-mono`}>
              Complete AI automation across platforms, cybersecurity mastery, and emerging AI engineering skills.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                category: "AI Automation & LLMs", 
                skills: ["LangChain", "N*N Frameworks", "Zapier Integration", "ChatGPT/GPT-4", "Claude (Anthropic)", "Grok (X.AI)", "Mistral AI", "Google Gemini"],
                icon: <Brain className={darkMode ? "text-cyan-400" : "text-cyan-600"} size={24} />,
                color: "cyan"
              },
              { 
                category: "AI Engineering (Learning)", 
                skills: ["AI Architecture Design", "Model Fine-tuning", "Vector Databases", "Prompt Engineering", "API Integration", "Lovable Platform", "Google AI Studio"],
                icon: <Cpu className={darkMode ? "text-purple-400" : "text-purple-600"} size={24} />,
                color: "purple"
              },
              { 
                category: "Cybersecurity & Networks", 
                skills: ["Cryptography & Cryptanalysis", "Penetration Testing", "Vulnerability Assessment", "Network Security", "Cisco Packet Tracer", "Wireshark", "Metasploit", "Nmap"],
                icon: <Shield className={darkMode ? "text-pink-400" : "text-pink-600"} size={24} />,
                color: "pink"
              },
              { 
                category: "Programming & Development", 
                skills: ["Python Automation", "C++", "HTML/CSS", "JavaScript", "SQL", "JSON", "Git/GitHub", "REST APIs"],
                icon: <Code className={darkMode ? "text-green-400" : "text-green-600"} size={24} />,
                color: "green"
              },
              { 
                category: "Systems & Tools", 
                skills: ["Windows Server Admin", "Linux/Unix", "VMware/VirtualBox", "ServiceNow", "Jira", "Docker (Learning)", "AWS (Basic)", "Microsoft 365 Suite"],
                icon: <Database className={darkMode ? "text-yellow-400" : "text-yellow-600"} size={24} />,
                color: "yellow"
              },
              { 
                category: "Creative & Leadership", 
                skills: ["Adobe Creative Suite", "Broadcast Graphics", "Team Management", "Agile Methodologies", "Process Improvement", "Cross-functional Collaboration"],
                icon: <Users className={darkMode ? "text-blue-400" : "text-blue-600"} size={24} />,
                color: "blue"
              }
            ].map((area, index) => (
              <GlowCard key={index} className={`${darkMode ? 'bg-gray-800/40' : 'bg-gray-50/80'} p-6 hover:scale-105 transition-transform duration-300`}>
                <div className="flex items-center space-x-3 mb-4">
                  {area.icon}
                  <h3 className={`text-lg font-semibold font-mono ${darkMode ? 'text-cyan-300' : 'text-cyan-700'}`}>{area.category}</h3>
                </div>
                <ul className="space-y-2">
                  {area.skills.map((skill, i) => (
                    <li key={i} className={`text-sm font-mono flex items-center space-x-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className={darkMode ? 'text-cyan-400' : 'text-cyan-600'}>▸</span>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 relative overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 neural-bg opacity-20" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-mono">
              Portfolio & Projects
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto font-mono`}>
              Showcasing AI automation workflows, cybersecurity research, and enterprise solutions across multiple platforms.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Vezran Enterprise AI Platform",
                description: "Secure-by-default infrastructure for enterprise AI deployment with strategic design partners across SaaS verticals.",
                tech: ["Enterprise Security", "AI Infrastructure", "Delaware C-Corp"],
                status: "ACTIVE",
                statusColor: "green"
              },
              {
                title: "Multi-Platform AI Automation Suite",
                description: "Complete automation workflows using LangChain, Zapier, and N*N frameworks integrating ChatGPT, Claude, Grok, and Mistral.",
                tech: ["LangChain", "Zapier", "Multi-LLM Integration"],
                status: "DEPLOYED",
                statusColor: "green"
              },
              {
                title: "AI Engineering Architecture (Learning)",
                description: "Developing expertise in AI model fine-tuning, vector databases, and advanced prompt engineering techniques.",
                tech: ["Model Fine-tuning", "Vector DBs", "Prompt Engineering"],
                status: "LEARNING",
                statusColor: "yellow"
              },
              {
                title: "EagleVision ESPN Graphics",
                description: "Created broadcast graphics for college sports including lower thirds, transitions, and digital content for TV and streaming.",
                tech: ["Adobe Creative Suite", "Broadcast Standards", "Digital Media"],
                status: "COMPLETED",
                statusColor: "blue"
              },
              {
                title: "Advanced Cybersecurity Research",
                description: "Comprehensive cryptanalysis, penetration testing, and vulnerability research using Metasploit, Nmap, and custom tools.",
                tech: ["Penetration Testing", "Metasploit", "Vulnerability Research"],
                status: "ONGOING",
                statusColor: "green"
              },
              {
                title: "Python Automation & JSON APIs",
                description: "Developed automation scripts reducing manual workloads by 30% with JSON data processing and REST API integrations.",
                tech: ["Python", "JSON", "REST APIs"],
                status: "DEPLOYED",
                statusColor: "green"
              }
            ].map((project, index) => (
              <GlowCard key={index} className={`${darkMode ? 'bg-gray-800/40' : 'bg-gray-50/80'} p-6 hover:scale-105 transition-all duration-300`}>
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-xl font-semibold font-mono ${darkMode ? 'text-cyan-300' : 'text-cyan-700'}`}>{project.title}</h3>
                  <span className={`px-3 py-1 text-xs rounded-full font-mono border animate-pulse ${
                    project.statusColor === 'green' ? (darkMode ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-green-100 text-green-700 border-green-400') :
                    project.statusColor === 'blue' ? (darkMode ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 'bg-blue-100 text-blue-700 border-blue-400') :
                    project.statusColor === 'purple' ? (darkMode ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' : 'bg-purple-100 text-purple-700 border-purple-400') :
                    (darkMode ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' : 'bg-yellow-100 text-yellow-700 border-yellow-500')
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className={`mb-4 font-mono text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className={`px-2 py-1 text-xs rounded font-mono border ${
                      darkMode 
                        ? 'bg-gray-700/50 text-cyan-300 border-cyan-500/30' 
                        : 'bg-cyan-50 text-cyan-700 border-cyan-300'
                    }`}>
                      {tech}
                    </span>
                  ))}
                </div>
                <button className={`group flex items-center space-x-2 transition-colors font-mono ${
                  darkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'
                }`}>
                  <span>View Details</span>
                  <ExternalLink size={14} className="group-hover:scale-110 transition-transform" />
                </button>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Section */}
      <section id="investor" className={`py-20 relative overflow-hidden ${darkMode ? 'bg-gray-800/30' : 'bg-gray-200/40'}`}>
        <FloatingParticles />
        <div className="absolute inset-0 matrix-bg opacity-20" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 font-mono">
              Investor Information
            </h2>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto font-mono`}>
              Join us in creating the world's first privacy-first Super-AI ecosystem that serves everyone from students to global enterprises.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <GlowCard className={`${darkMode ? 'bg-gray-800/40' : 'bg-gray-50/80'} p-6 text-center hover:scale-105 transition-transform duration-300`}>
              <h3 className="text-3xl font-bold text-cyan-400 mb-2 font-mono">GLOBAL</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} font-mono`}>Super-AI Ecosystem</p>
            </GlowCard>
            <GlowCard className={`${darkMode ? 'bg-gray-800/40' : 'bg-gray-50/80'} p-6 text-center hover:scale-105 transition-transform duration-300`}>
              <h3 className="text-3xl font-bold text-purple-400 mb-2 font-mono">25+</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} font-mono`}>Language Support</p>
            </GlowCard>
            <GlowCard className={`${darkMode ? 'bg-gray-800/40' : 'bg-gray-50/80'} p-6 text-center hover:scale-105 transition-transform duration-300`}>
              <h3 className="text-3xl font-bold text-pink-400 mb-2 font-mono">2035</h3>
              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} font-mono`}>AI-Human Coexistence</p>
            </GlowCard>
          </div>
          
          <GlowCard className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-8 text-center border-cyan-500/30">
            <h3 className="text-2xl font-semibold mb-4 font-mono text-cyan-400">Investment Opportunity</h3>
            <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-lg mb-6 max-w-4xl mx-auto font-mono leading-relaxed`}>
              VEZRAN represents a unique opportunity to invest in the future of Super-AI. We're building the world's first 
              privacy-first ecosystem that serves everyone—from students to enterprises—with sovereign, quantum-safe AI. 
              Our vision extends from immediate enterprise solutions to a 2035 future where AI peacefully co-exists with humanity everywhere.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.vezran.com"
                target="_blank"
                className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 font-mono border border-cyan-400/30"
              >
                <span className="flex items-center space-x-2">
                  <Database size={16} />
                  <span>Download Pitch Deck</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <div className="relative group">
                <button className="group px-8 py-3 border-2 border-cyan-500/50 rounded-lg font-semibold transition-all duration-300 hover:bg-cyan-500/10 hover:border-cyan-400 font-mono">
                  <span className="flex items-center space-x-2">
                    <Activity size={16} />
                    <span>Schedule Meeting</span>
                  </span>
                </button>
                <div className="absolute top-full left-0 right-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border rounded-lg shadow-lg p-2`}>
                    <a
                      href="https://calendly.com/taaz-vezran"
                      target="_blank"
                      className={`block px-4 py-2 rounded font-mono text-sm transition-colors ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'}`}
                    >
                      📅 Calendly Meeting
                    </a>
                    <a
                      href="mailto:taaz@vezran.com?subject=Meeting Request&body=Hi, I'd like to schedule a meeting to discuss Vezran."
                      className={`block px-4 py-2 rounded font-mono text-sm transition-colors ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'}`}
                    >
                      ✉️ Email Request
                    </a>
                    <a
                      href="https://zoom.us/j/your-meeting-id"
                      target="_blank"
                      className={`block px-4 py-2 rounded font-mono text-sm transition-colors ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-700'}`}
                    >
                      🎥 Zoom Meeting
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative overflow-hidden">
        <FloatingParticles />
        <div className="absolute inset-0 neural-bg opacity-20" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 font-mono">
            Let's Connect
          </h2>
          <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-12 font-mono`}>
            Ready to discuss the future of AI security? Let's start a conversation.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a href="mailto:taaz@vezran.com" className="group">
              <GlowCard className={`${darkMode ? 'bg-gray-800/40' : 'bg-gray-50/80'} p-6 hover:scale-105 transition-all duration-300 text-center`}>
                <Mail className={`mx-auto mb-4 group-hover:scale-110 transition-transform ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} size={32} />
                <h3 className={`text-lg font-semibold mb-2 font-mono ${darkMode ? 'text-cyan-300' : 'text-cyan-700'}`}>Email</h3>
                <p className={`font-mono text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>taaz@vezran.com</p>
              </GlowCard>
            </a>
            
            <a href="https://www.linkedin.com/in/taazbro/" target="_blank" className="group">
              <GlowCard className={`${darkMode ? 'bg-gray-800/40' : 'bg-gray-50/80'} p-6 hover:scale-105 transition-all duration-300 text-center`}>
                <Linkedin className={`mx-auto mb-4 group-hover:scale-110 transition-transform ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} size={32} />
                <h3 className={`text-lg font-semibold mb-2 font-mono ${darkMode ? 'text-cyan-300' : 'text-cyan-700'}`}>LinkedIn</h3>
                <p className={`font-mono text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Professional networking</p>
              </GlowCard>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t relative overflow-hidden ${darkMode ? 'border-cyan-500/20 bg-gray-900/50' : 'border-cyan-500/25 bg-gray-200/50'}`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} font-mono`}>
            <span className="text-cyan-400">©</span> 2025 Tanjim Ahmed Al Zabeer. 
            <span className="text-cyan-400"> Building the future of AI security at Vezran™</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
