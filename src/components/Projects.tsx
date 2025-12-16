import React from 'react';
import { Calendar, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'MockMeUp',
      period: 'Aug 2025 - Nov 2025',
      description:
        "AI-powered platform for generating interview questions, practicing mock interviews, and tracking progress.", technologies: [
          'React.js',
          'Node.js',
          'Express.js',
          'MongoDB',
          'Google Gemini API',
          'FastAPI',
          'Render'
        ],
      image: 'https://www.navigateforward.com/wp-content/uploads/2025/01/Image_AI_Interviews_Sm-scaled.jpg',
      category: 'Full Stack',
      github: '',    // add your repo link later
      demo: 'https://mockmeup-zhm6.onrender.com'
    },
    {
      title: 'Learn Together',
      period: 'Jun 2025 - Jul 2025',
      description: 'Built a platform for learners to pair up and track progress with dynamic pairing logic, secure auth, and a responsive UI.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
      image: 'https://selectedfirms.co/public/assets/images/blog_cover_image/66978392_1708499485.webp',
      category: 'Web Platform',
      github: 'https://github.com/V-Vimal-kumar/Learn-Together',
      demo: 'learn-together-weld.vercel.app'
    },
    {
      title: 'Expense Tracker System',
      period: 'Feb 2024 - May 2024',
      description: 'Application that allows users to record, categorize, and analyze their spending with a user-friendly interface and real-time insights.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      image: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Full Stack',
      github: 'https://github.com/V-Vimal-kumar/Expense-Tracker',
      demo: ''
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Here are some of the projects I've worked on that showcase my skills and passion for development
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center text-slate-500 text-sm mb-3">
                    <Calendar size={16} className="mr-2" />
                    {project.period}
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm font-medium"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border-2 border-slate-300 text-slate-700 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-sm font-medium"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => window.open("https://github.com/V-Vimal-kumar", "_blank")}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View All Projects
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
