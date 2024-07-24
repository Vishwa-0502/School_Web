import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Home() {
  return (
    <div>
        <div  id = "Home" name="Home" className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      
      <main className="flex flex-col items-center justify-center flex-1 px-4 py-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Springdale Public School</h1>
        <p className="text-lg text-gray-600 mb-6">
          Where we nurture young minds for a brighter future.
        </p>
        <div className="w-full max-w-[1240px] mx-auto">
          <Carousel
            showThumbs={false}
            emulateTouch={true}
            showArrows={true}
            showStatus={false}
            showIndicators={true}
            swipeable={true}
            autoPlay
            infiniteLoop
            interval={2500}
          >
            <div className='p-4'>
              <div className='relative'>
                <div className='absolute w-full h-full bg-black/40 text-gray-200 flex flex-col justify-center'>
                  <h2 className='px-4 text-2xl font-semibold'>Annual Sports Day</h2>
                  <p className='px-4 text-lg'>Celebrating Excellence in Sports</p>
                </div>
                <img className='w-full h-80 object-cover' src="https://jagrancollege.ac.in/wp-content/uploads/2023/05/189.jpg" alt="Annual Sports Day" />
              </div>
            </div>
            <div className='p-4'>
              <div className='relative'>
                <div className='absolute w-full h-full bg-black/40 text-gray-200 flex flex-col justify-center'>
                  <h2 className='px-4 text-2xl font-semibold'>Science Exhibition</h2>
                  <p className='px-4 text-lg'>Showcasing Student Innovations</p>
                </div>
                <img className='w-full h-80 object-cover' src="https://www.scottishigh.com/wp-content/uploads/2023/07/Science-Exhibition-2023-2.jpg" alt="Science Exhibition" />
              </div>
            </div>
            <div className='p-4'>
              <div className='relative'>
                <div className='absolute w-full h-full bg-black/40 text-gray-200 flex flex-col justify-center'>
                  <h2 className='px-4 text-2xl font-semibold'>Cultural Fest</h2>
                  <p className='px-4 text-lg'>Embracing Diversity and Creativity</p>
                </div>
                <img className='w-full h-80 object-cover' src="https://news.globalindianschool.org/content/2017/july/culturalfest-blore-17-fi.jpg" alt="Cultural Fest" />
              </div>
            </div>
          </Carousel>
        </div>
      </main>
      
    </div>
    </div>
  )
}
