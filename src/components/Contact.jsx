import React from 'react';

function Contact() {
  return (
    <section id="Contact" name="Contact" className="bg-gray-200 py-12">
      <div className="container mx-auto px-4 md:px-20">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center mb-8">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-md mt-2">Address: "Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code"</p>
          <p className="text-md">Phone: "+1 (123) 456-7890"</p>
          <p className="text-md">Email: "info@springdale.edu"</p>
        </div>
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg">
          <div className="w-full md:w-1/2 p-6">
            <h2 className="font-bold mb-4 text-2xl text-center">Contact Us Through the Form</h2>
            <form
              action="https://getform.io/f/bejyedva"
              method="POST"
              className="space-y-6"
            >
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium">
                    Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2 p-6">
            <h2 className="font-bold mb-4 text-2xl text-center">Find Us on the Map</h2>
            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d473.03915075808834!2d73.83616437459716!3d18.469466842699003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2956835cd253b%3A0x4340aea7f92e9c92!2sSinhgad%20Spring%20Dale%20Public%20School!5e0!3m2!1sen!2sin!4v1721847485460!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>

      <footer className="w-full bg-gray-200 p-4 text-center">
        <p className="text-gray-600">&copy; 2024 Springdale Public School</p>
      </footer>

    </section>
  );
}

export default Contact;
