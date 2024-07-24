import React, { useState } from 'react';
import pic1 from '../photo/sports_day.jpg';
import pic2 from '../photo/science_exhibition.jpg';
import pic3 from '../photo/cultural_fest.jpg';
import pic4 from '../photo/classroom.jpg';
import pic5 from '../photo/library.jpg';

const photoGallery = [
  { src: pic1, alt: 'Students participating in various sports events', description: 'Students participating in various sports events.' },
  { src: pic2, alt: 'Students presenting their science projects', description: 'Students presenting their science projects.' },
  { src: pic3, alt: 'Students performing in the cultural fest', description: 'Students performing in the cultural fest.' },
  { src: pic4, alt: 'A glimpse of our interactive classrooms', description: 'A glimpse of our interactive classrooms.' },
  { src: pic5, alt: 'Students reading and studying in the school library', description: 'Students reading and studying in the school library.' },
  { src: 'https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/11/2022_11$largeimg_167614843.jpg', alt: 'Students participating in various sports events', description: 'Students participating in various sports events.' },
  { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVaNFeuojkWV8oUqk48cRKjPq-8csnNhs3qg&s', alt: 'Students presenting their science projects', description: 'Students presenting their science projects.' },
  { src: 'https://static.toiimg.com/thumb/msid-68255844,width-400,resizemode-4/68255844.jpg', alt: 'Students performing in the cultural fest', description: 'Students performing in the cultural fest.' },
  { src: 'https://www.enterprisenews.com/gcdn/authoring/2010/06/01/NENT/ghows-WL-64172fd5-ffb0-44a3-ab28-2bc48e3391ff-3a900622.jpeg?width=660&height=424&fit=crop&format=pjpg&auto=webp', alt: 'A glimpse of our interactive classrooms', description: 'A glimpse of our interactive classrooms.' },

];

const videoGallery = [
  { src: 'https://www.youtube.com/embed/FUSJkqaHgYk', title: 'Virtual tour of Springdale Public School', description: 'Virtual tour of Springdale Public School.' },
  { src: 'https://www.youtube.com/embed/WZiNqSvl0q8', title: 'Highlights from the Annual Function 2023', description: 'Highlights from the Annual Function 2023.' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (type) => {
    setFilter(type);
  };

  const filteredPhotos = filter === 'all' ? photoGallery : photoGallery.filter(photo => photo.description.toLowerCase().includes(filter.toLowerCase()));
  const filteredVideos = filter === 'all' ? videoGallery : videoGallery.filter(video => video.description.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div id = "Gallery" name="Gallery" className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <header className="w-full bg-cyan-700 p-6 text-white text-center shadow-lg rounded-b-xl">
        <h1 className="text-4xl font-extrabold">Gallery</h1>
      </header>
      <main className="flex flex-col items-center max-w-6xl mx-auto p-8 mt-6 space-y-12">
        <div className="w-full mb-8 flex justify-center space-x-4">
          <button onClick={() => handleFilterChange('all')} className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700">All</button>
          <button onClick={() => handleFilterChange('sports')} className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700">Sports</button>
          <button onClick={() => handleFilterChange('science')} className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700">Science</button>
          <button onClick={() => handleFilterChange('cultural')} className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700">Cultural</button>
          <button onClick={() => handleFilterChange('classroom')} className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700">Classroom</button>
          <button onClick={() => handleFilterChange('library')} className="bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700">Library</button>
        </div>

        <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={photo.src} alt={photo.alt} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-lg text-gray-700">{photo.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map((video, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="315"
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{video.title}</h3>
                <p className="text-lg text-gray-700">{video.description}</p>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

