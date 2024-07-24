import React from 'react';

export default function Admissions() {
  return (
    <div id = "Admissions" name="Admissions" className="flex flex-col items-center min-h-screen bg-cyan-50 p-6">
      <header className="w-full bg-cyan-600 p-4 text-white text-center shadow-lg">
        <h1 className="text-3xl font-bold">Admissions</h1>
      </header>
      <main className="flex flex-col items-center max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg mt-8">
        <section className="w-full mb-8">
          <h2 className="text-3xl font-semibold text-cyan-700 mb-4">Admission Process and Criteria</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Admission forms are available for download. Submit the completed form along with required documents at the school office.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
          </p>
        </section>

        <section className="w-full mb-8">
          <h2 className="text-3xl font-semibold text-cyan-700 mb-4">Download Admission Forms</h2>
          <a 
            href="/admission-form.pdf" 
            className="text-lg text-cyan-600 underline hover:text-cyan-800"
            download
          >
            Click here to download the admission form
          </a>
        </section>

        <section className="w-full mb-8">
          <h2 className="text-3xl font-semibold text-cyan-700 mb-4">Important Dates</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
            <li><strong>Admission Form Availability:</strong> March 1st</li>
            <li><strong>Last Date for Submission:</strong> March 31st</li>
            <li><strong>Entrance Test:</strong> April 15th</li>
            <li><strong>Announcement of Results:</strong> April 30th</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
