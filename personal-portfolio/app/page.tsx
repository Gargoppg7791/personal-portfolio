"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  User, 
  Briefcase, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink,
  Download,
  ChevronDown,
  Menu,
  X,
  Star,
  Calendar,
  Award,
  Target,
  Zap,
  Globe,
  Database,
  Server,
  Smartphone,
  Palette,
  Brain,
  Coffee
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { name: 'React/Next.js', level: 95, icon: <Globe className="w-5 h-5" /> },
    { name: 'Node.js', level: 90, icon: <Server className="w-5 h-5" /> },
    { name: 'TypeScript', level: 88, icon: <Code className="w-5 h-5" /> },
    { name: 'MongoDB', level: 85, icon: <Database className="w-5 h-5" /> },
    { name: 'React Native', level: 80, icon: <Smartphone className="w-5 h-5" /> },
    { name: 'UI/UX Design', level: 75, icon: <Palette className="w-5 h-5" /> },
  ];

  const projects = [
    {
      title: 'Smart Asset Monitoring System (SAMS)',
      description: 'Spearheaded development reducing CSR costs by 80% (from 700Cr to 140Cr) for Coal India Limited. Revolutionized asset management with live tracking, geo-tagging, and maintenance functionalities.',
      image: '/sams pic copy.jpg',
      tech: ['React', 'Node.js', 'MongoDB', 'GPS Tracking', 'Real-time Analytics'],
      github: '#',
      live: 'https://youtu.be/JNsClUgtTjE?si=gnNBHz5prcynFvLU',
      isVideo: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['Next.js', 'Socket.io', 'PostgreSQL', 'Tailwind'],
      github: '#',
      live: '#'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      tech: ['React', 'Chart.js', 'Express', 'MySQL'],
      github: '#',
      live: '#'
    }
  ];

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      period: '2023 - Present',
      description: 'Leading development of scalable web applications using modern technologies.',
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations',
      period: '2021 - 2023',
      description: 'Developed and maintained multiple client projects using React and Node.js.',
      achievements: [
        'Built 15+ production applications',
        'Reduced load times by 60%',
        'Mentored junior developers'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      period: '2020 - 2021',
      description: 'Created responsive web interfaces and improved user experience.',
      achievements: [
        'Increased user engagement by 35%',
        'Implemented responsive designs',
        'Optimized SEO performance'
      ]
    }
  ];

  const NavItems = () => (
    <>
      {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
        <button
          key={item}
          onClick={() => scrollToSection(item.toLowerCase())}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            activeSection === item.toLowerCase()
              ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
              : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
          }`}
        >
          {item}
        </button>
      ))}
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Priyanshu
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
              <NavItems />
            </div>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <NavItems />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6">
              <motion.h1 
                className="text-5xl lg:text-7xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient">
                  Hey, I'm Priyanshu
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Full Stack Developer & UI/UX Enthusiast
              </motion.p>
              <motion.p 
                className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Crafting digital experiences with modern technologies. Passionate about creating 
                scalable applications that make a difference.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-8 py-3"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
                <Mail className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white px-8 py-3"
                asChild
              >
                <a href="/Priyanshu_Resume (4).pdf" download="Priyanshu_Resume.pdf">
                  Download Resume
                  <Download className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 transition-all duration-300"
                asChild
              >
                <a href="https://github.com/Gargoppg7791" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 transition-all duration-300"
                asChild
              >
                <a href="https://www.linkedin.com/in/priyanshu-garg-5a1085290/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 transition-all duration-300"
                asChild
              >
                <a href="mailto:gargp6089@gmail.com">
                  <Mail className="h-6 w-6" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse opacity-20"></div>
              <div className="absolute inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse opacity-30"></div>
              <Avatar className="w-72 h-72 absolute inset-4 border-4 border-white dark:border-gray-800 shadow-2xl">
                <AvatarImage src="/mine.jpg" alt="Priyanshu" className="object-cover" />
                <AvatarFallback className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                  PG
                </AvatarFallback>
              </Avatar>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="h-8 w-8 text-gray-400" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate developer with a love for creating innovative solutions
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 hover-lift glass">
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">My Journey</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    With over 4 years of experience in full-stack development, I specialize in creating 
                    robust, scalable applications using modern technologies. My passion lies in solving 
                    complex problems and delivering exceptional user experiences.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I believe in continuous learning and staying updated with the latest industry trends. 
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                    projects, or sharing knowledge with the developer community.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail Oriented'].map((trait) => (
                      <Badge key={trait} variant="secondary" className="px-3 py-1">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="p-6 hover-lift glass">
                <div className="flex items-center gap-4 mb-4">
                  <Target className="h-8 w-8 text-blue-500" />
                  <h4 className="text-xl font-semibold">Mission</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  To create impactful digital solutions that enhance user experiences and drive business growth.
                </p>
              </Card>

              <Card className="p-6 hover-lift glass">
                <div className="flex items-center gap-4 mb-4">
                  <Zap className="h-8 w-8 text-purple-500" />
                  <h4 className="text-xl font-semibold">Approach</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  I combine technical expertise with creative thinking to deliver solutions that are both functional and beautiful.
                </p>
              </Card>

              <Card className="p-6 hover-lift glass">
                <div className="flex items-center gap-4 mb-4">
                  <Brain className="h-8 w-8 text-green-500" />
                  <h4 className="text-xl font-semibold">Philosophy</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Clean code, user-centric design, and continuous improvement are the pillars of my development philosophy.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          <Tabs defaultValue="technical" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="technical">Technical Skills</TabsTrigger>
              <TabsTrigger value="tools">Tools & Platforms</TabsTrigger>
              <TabsTrigger value="soft">Soft Skills</TabsTrigger>
            </TabsList>

            <TabsContent value="technical">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-6"
              >
                {skills.map((skill, index) => (
                  <motion.div key={skill.name} variants={fadeInUp}>
                    <Card className="p-6 hover-lift glass">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white">
                          {skill.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-2">
                            <h4 className="font-semibold">{skill.name}</h4>
                            <span className="text-sm text-gray-500">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="tools">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-6"
              >
                {[
                  { name: 'VS Code', category: 'Editor' },
                  { name: 'Git & GitHub', category: 'Version Control' },
                  { name: 'Docker', category: 'Containerization' },
                  { name: 'AWS', category: 'Cloud Platform' },
                  { name: 'Figma', category: 'Design' },
                  { name: 'Postman', category: 'API Testing' },
                ].map((tool, index) => (
                  <motion.div key={tool.name} variants={fadeInUp}>
                    <Card className="p-6 text-center hover-lift glass">
                      <h4 className="font-semibold mb-2">{tool.name}</h4>
                      <p className="text-sm text-gray-500">{tool.category}</p>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="soft">
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  'Leadership',
                  'Communication',
                  'Problem Solving',
                  'Time Management',
                  'Teamwork',
                  'Adaptability',
                  'Critical Thinking',
                  'Creativity'
                ].map((skill, index) => (
                  <motion.div key={skill} variants={fadeInUp}>
                    <Card className="p-6 text-center hover-lift glass">
                      <h4 className="font-semibold">{skill}</h4>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={fadeInUp}>
                <Card className="overflow-hidden hover-lift glass group">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-1" />
                            Code
                          </a>
                        </Button>
                        <Button size="sm" variant="secondary" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            {project.isVideo ? (
                              <>
                                <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z"/>
                                </svg>
                                Demo
                              </>
                            ) : (
                              <>
                                <ExternalLink className="h-4 w-4 mr-1" />
                                Live
                              </>
                            )}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-blue-500" />
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My professional journey and key achievements
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div key={exp.title} variants={fadeInUp}>
                <Card className="p-8 hover-lift glass">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                          <Briefcase className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                      <div className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-yellow-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">{achievement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Calendar className="h-5 w-5" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="p-8 hover-lift glass">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Coffee className="h-6 w-6 text-blue-500" />
                  Let's Grab a Coffee
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                  or simply chat about technology and innovation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <Mail className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href="mailto:gargp6089@gmail.com" className="text-blue-600 hover:underline">
                        gargp6089@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <Linkedin className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">LinkedIn</p>
                      <a 
                        href="https://www.linkedin.com/in/priyanshu-garg-5a1085290/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Connect with me
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
                      <Github className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">GitHub</p>
                      <a 
                        href="https://github.com/Gargoppg7791" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Check out my code
                      </a>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 hover-lift glass">
                <h3 className="text-2xl font-bold mb-6">Quick Message</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3"
                  >
                    Send Message
                    <Mail className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-8">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-gray-800 hover:text-blue-400 transition-all duration-300"
              asChild
            >
              <a href="https://github.com/Gargoppg7791" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-gray-800 hover:text-blue-400 transition-all duration-300"
              asChild
            >
              <a href="https://www.linkedin.com/in/priyanshu-garg-5a1085290/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:bg-gray-800 hover:text-blue-400 transition-all duration-300"
              asChild
            >
              <a href="mailto:gargp6089@gmail.com">
                <Mail className="h-6 w-6" />
              </a>
            </Button>
          </div>
          <p className="text-gray-400">
            © 2024 Priyanshu. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}