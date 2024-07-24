import React from 'react';

export default function About() {
  return (
    <div id = "About" name="About" className="flex flex-col items-center min-h-screen bg-cyan-50 p-6">
      <header className="w-full bg-cyan-600 p-4 text-white text-center shadow-lg">
        <h1 className="text-3xl font-bold">About Us</h1>
      </header>
      <main className="flex flex-col items-center max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg mt-8">
        <section className="w-full mb-8">
          <h2 className="text-3xl font-semibold text-cyan-700 mb-4">History</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
          </p>
        </section>

        <section className="w-full mb-8">
          <h2 className="text-3xl font-semibold text-cyan-700 mb-4">Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
          </p>
        </section>

        <section className="w-full mb-8">
          <h2 className="text-3xl font-semibold text-cyan-700 mb-4">Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
          </p>
        </section>

        <section className="w-full mb-8">
          <h2 className="text-3xl font-semibold text-cyan-700 mb-4">Principal's Message</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
          </p>
        </section>

        <section className="w-full mb-8">
          <h2 className="text-3xl font-semibold text-cyan-700 mb-4">Infrastructure and Facilities</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>Library with a vast collection of books and digital resources</li>
            <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
          </ul>
        </section>
      </main>
      
    </div>
  );
}

