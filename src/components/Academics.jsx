import React from 'react';

export default function Academics() {
  return (
    <div id = "Academics" name="Academics" className="flex flex-col items-center min-h-screen bg-cyan-50 p-6">
      <header className="w-full bg-cyan-600 p-4 text-white text-center shadow-lg">
        <h1 className="text-3xl font-bold">Academics</h1>
      </header>
      <main className="flex flex-col items-center max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg mt-8">
        
        <section className="w-full mb-8">
          <h2 className="text-3xl font-semibold text-cyan-700 mb-4">Curriculum</h2>
          <div className="text-lg text-gray-700 leading-relaxed">
            <h3 className="text-2xl font-semibold text-cyan-600 mb-2">Primary (Grades 1-5)</h3>
            <p>English, Mathematics, Science, Social Studies, Art, Physical Education</p>
            <h3 className="text-2xl font-semibold text-cyan-600 mb-2 mt-4">Secondary (Grades 6-10)</h3>
            <p>English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art</p>
            <h3 className="text-2xl font-semibold text-cyan-600 mb-2 mt-4">Senior Secondary (Grades 11-12)</h3>
            <p>
              <strong>Science Stream:</strong> Physics, Chemistry, Biology, Mathematics, Computer Science, English
            </p>
            <p>
              <strong>Commerce Stream:</strong> Accountancy, Business Studies, Economics, Mathematics, English
            </p>
          </div>
        </section>

        <section className="w-full mb-8">
          <h2 className="text-3xl font-semibold text-cyan-700 mb-4">Teaching Methodologies</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We use a blend of traditional and modern teaching techniques to cater to different learning styles.
          </p>
        </section>

        <section className="w-full mb-8">
          <h2 className="text-3xl font-semibold text-cyan-700 mb-4">Educational Resources</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Digital classrooms, interactive learning modules, and access to online educational platforms.
          </p>
        </section>
      </main>
    </div>
  );
}
