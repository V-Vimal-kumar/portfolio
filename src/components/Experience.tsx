import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [


    {
      type: 'Internship',
      title: 'Full Stack Development',
      company: 'Syncner',
      period: 'Feb 2025 - Present',
      location: 'Remote',
      description: [
        "Developed key features for MockMeUp using the MERN stack.",
        "Integrated Generative AI (Gemini) for automated question generation.",
        "Worked with a 4-member cross-functional team using Agile & Git.",
        "Enhanced reliability by fixing API/CORS issues and deploying on Render."
      ]
      ,
      technologies: ['React.js', 'Node.js', 'JavaScript', 'Tailwind CSS', 'MongoDB', 'Express.js','Fast API']
    },
    {
      type: 'Internship',
      title: 'Full Stack Development Internship',
      company: 'WebGen',
      period: 'Jul 2024',
      location: 'Remote',
      description: [
        'Gained comprehensive knowledge about Front-end and Back-end development',
        'Improved expertise in frameworks like React.js through hands-on exercises',
        'Participated in solving complex development challenges during the internship',
        'Developed an E-commerce site as the final project, demonstrating full-stack capabilities'
      ],
      technologies: ['React.js', 'Node.js', 'JavaScript', 'HTML/CSS']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              My professional journey and hands-on experience in software development
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600"></div>

            {experiences.map((experience, index) => (
              <div key={index} className="relative pl-20 pb-12">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full border-4 border-white shadow-lg"></div>

                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium flex items-center gap-2">
                      <Briefcase size={14} />
                      {experience.type}
                    </span>
                    <span className="flex items-center gap-2 text-slate-500 text-sm">
                      <Calendar size={14} />
                      {experience.period}
                    </span>
                    <span className="flex items-center gap-2 text-slate-500 text-sm">
                      <MapPin size={14} />
                      {experience.location}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {experience.title}
                  </h3>
                  <h4 className="text-lg font-semibold text-blue-600 mb-4">
                    {experience.company}
                  </h4>

                  <ul className="space-y-3 mb-6">
                    {experience.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-slate-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 p-8 bg-white rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Looking for New Opportunities
            </h3>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              I'm actively seeking internship and full-time opportunities where I can contribute
              my skills and continue growing as a developer. Let's connect and discuss how I can
              add value to your team.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;