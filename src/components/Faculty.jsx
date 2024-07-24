import React from 'react';

const facultyImages = {
  'John Doe': 'https://ntrepidcorp.com/wp-content/uploads/2016/06/team-1.jpg',
  'Jane Smith': 'https://m.media-amazon.com/images/S/amzn-author-media-prod/a11scrghnftfn2c58b8tr8pa27._SY450_CR7%2C0%2C450%2C450_.jpg',
  'Emily Johnson': 'https://engineering.nd.edu/wp-content/uploads/2021/08/johnson-HS2.jpg',
  'Michael Brown': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr2Uq-ig3WnS7fahGimx8O7q01SXSn8GsWcU82j1whUx1klEP-zUC-7iYYBJZUb5cPhPc&usqp=CAU',
  'Sophia Davis': 'https://media.licdn.com/dms/image/D4E03AQFbCcW8rcolsQ/profile-displayphoto-shrink_200_200/0/1706970833701?e=2147483647&v=beta&t=mDvHc8E5Y-lN1YDJbOlk-DMmDJ_Cn2TDKwzrcHTbCLI',
  'David Wilson': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiC20Vh7qzltZAdW0JzEkby2kMELuf4LEnOg&s',
};

const facultyMembers = [
  {
    name: 'John Doe',
    role: 'Principal',
    qualifications: 'M.Ed',
    experience: '20 years of experience in educational administration',
  },
  {
    name: 'Jane Smith',
    role: 'Vice Principal',
    qualifications: 'M.Sc. in Physics',
    experience: '15 years of teaching experience',
  },
  {
    name: 'Emily Johnson',
    role: 'English Teacher',
    qualifications: 'M.A. in English',
    experience: '10 years of teaching experience',
  },
  {
    name: 'Michael Brown',
    role: 'Mathematics Teacher',
    qualifications: 'M.Sc. in Mathematics',
    experience: '8 years of teaching experience',
  },
  {
    name: 'Sophia Davis',
    role: 'Science Teacher',
    qualifications: 'M.Sc. in Chemistry',
    experience: '12 years of teaching experience',
  },
  {
    name: 'David Wilson',
    role: 'Computer Science Teacher',
    qualifications: 'B.Tech in Computer Science',
    experience: '5 years of teaching experience',
  },
];

export default function Faculty() {
  return (
    <div id = "Faculty" name="Faculty" className="flex flex-col items-center min-h-screen bg-gray-50 p-6">
      <header className="w-full bg-cyan-600 p-4 text-white text-center shadow-lg mb-8">
        <h1 className="text-3xl font-bold">Our Faculty</h1>
      </header>
      <main className="flex flex-col items-center max-w-5xl mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {facultyMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105"
            >
              <img
                src={facultyImages[member.name]}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h2 className="text-2xl font-semibold text-cyan-700 mb-2">{member.name}</h2>
              <h3 className="text-xl font-medium text-gray-800 mb-1">{member.role}</h3>
              <p className="text-lg text-gray-600 mb-2">
                <strong>Qualifications:</strong> {member.qualifications}
              </p>
              <p className="text-lg text-gray-600">
                <strong>Experience:</strong> {member.experience}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
