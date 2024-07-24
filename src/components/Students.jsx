import React from 'react';

const achievements = [
  { name: 'John Smith', achievement: 'National Level Math Olympiad Winner' },
  { name: 'Sarah Lee', achievement: 'Gold Medalist in State Swimming Championship' },
  { name: 'Tech Innovators Club', achievement: 'Winners of Inter-School Robotics Competition' },
];

const studentCouncil = [
  { role: 'President', name: 'Amy Parker', grade: 'Grade 12' },
  { role: 'Vice President', name: 'Rajiv Mehta', grade: 'Grade 11' },
  { role: 'Secretary', name: 'Lisa Wong', grade: 'Grade 10' },
];

export default function Students() {
  return (
    <div id = "Students" name="Students" className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <header className="w-full bg-cyan-700 p-6 text-white text-center shadow-lg rounded-b-xl">
        <h1 className="text-4xl font-extrabold">Student Life at Springdale</h1>
      </header>
      <main className="flex flex-col items-center max-w-6xl mx-auto p-8 mt-6 space-y-12">
        <section className="w-full bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-semibold text-cyan-800 mb-4">Extracurricular Activities</h2>
          <p className="text-lg text-gray-700">
            Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club
          </p>
        </section>

        <section className="w-full bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-semibold text-cyan-800 mb-4">Clubs and Societies</h2>
          <p className="text-lg text-gray-700">
            Literary Society, Environmental Club, Astronomy Club, Coding Club
          </p>
        </section>

        <section className="w-full bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-semibold text-cyan-800 mb-4">Achievements</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {achievements.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="font-semibold text-cyan-600">{item.name}:</span> 
                <span>{item.achievement}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="w-full bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h2 className="text-3xl font-semibold text-cyan-800 mb-4">Student Council</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
            {studentCouncil.map((member, index) => (
              <li key={index} className="flex items-center space-x-2">
                <span className="font-semibold text-cyan-600">{member.role}:</span> 
                <span>{member.name}, {member.grade}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

