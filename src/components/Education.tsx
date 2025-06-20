import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Information Technology',
      institution: 'SNS College of Engineering',
      period: '2022 - 2026',
      gpa: '7.2/10',
      status: 'Currently Pursuing',
      description: 'Focused on software development, data structures, algorithms, and modern web technologies.',
      highlights: ['Full Stack Development', 'Database Management', 'Software Engineering', 'Web Technologies']
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Sanjose Matriculation Higher Secondary School',
      period: '2021 - 2022',
      gpa: '73%',
      status: 'Completed',
      description: 'Completed higher secondary education with focus on Mathematics and Computer Science.',
      highlights: ['Mathematics', 'Computer Science', 'Physics', 'Chemistry']
    },
    {
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: 'Sanjose Matriculation Higher Secondary School',
      period: '2019 - 2020',
      gpa: '61%',
      status: 'Completed',
      description: 'Completed secondary education with a well-rounded curriculum.',
      highlights: ['Core Subjects', 'Foundation Studies']
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              My academic journey and educational background that shaped my technical foundation
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-indigo-600"></div>

            {education.map((edu, index) => (
              <div key={index} className="relative pl-20 pb-12 last:pb-0">
                {/* Timeline Dot */}
                <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full border-4 border-white shadow-lg"></div>

                <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 ${
                      edu.status === 'Currently Pursuing' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      <GraduationCap size={14} />
                      {edu.status}
                    </span>
                    <span className="flex items-center gap-2 text-slate-500 text-sm">
                      <Calendar size={14} />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-2 text-slate-500 text-sm">
                      <Award size={14} />
                      {edu.gpa}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-800 mb-2">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg font-semibold text-blue-600 mb-4">
                    {edu.institution}
                  </h4>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="space-y-3">
                    <h5 className="font-semibold text-slate-800">Key Areas:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <span
                          key={highlightIndex}
                          className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full font-medium shadow-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Academic Achievements */}
          <div className="mt-16 p-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl text-white">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Academic Focus</h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Throughout my academic journey, I've maintained a strong focus on practical learning 
                and hands-on experience, complementing theoretical knowledge with real-world projects.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">7.2</div>
                  <div className="text-blue-200">Current GPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">2026</div>
                  <div className="text-blue-200">Expected Graduation</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">IT</div>
                  <div className="text-blue-200">Specialization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;