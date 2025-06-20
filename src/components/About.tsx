import React from 'react';
import { Code, Database, Globe, Lightbulb } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Full Stack Development',
      description: 'Experienced in React.js, Node.js, and modern web technologies'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Database Management',
      description: 'Proficient in MongoDB and database design principles'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Technologies',
      description: 'Strong foundation in HTML, CSS, JavaScript, and responsive design'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Problem Solving',
      description: 'Passionate about creating innovative solutions to real-world challenges'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                Passionate Developer & Continuous Learner
              </h3>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                I'm a dedicated B.Tech IT student with hands-on experience in full stack development 
                and a strong foundation in modern web technologies. My journey in software development 
                has been driven by curiosity and a genuine passion for creating meaningful digital experiences.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                With proficiency in React.js, Node.js, and MongoDB, I enjoy building applications that 
                solve real-world problems. I believe in writing clean, maintainable code and creating 
                user-focused designs that make a difference.
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Currently pursuing my degree while gaining practical experience through internships 
                and personal projects, I'm always eager to learn new technologies and take on 
                challenging problems that push my skills to the next level.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  Full Stack Developer
                </span>
                <span className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">
                  B.Tech IT Student
                </span>
                <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                  Problem Solver
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="text-blue-600 mb-4">
                    {highlight.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;