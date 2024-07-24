import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Home'
import About from './components/About'
import Academics from './components/Academics'
import Admissions from './components/Admission'
import Faculty from './components/Faculty'
import Students from './components/Students'
import Gallery from './components/Gallery'
import Contact from './components/Contact'


export default function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <About/>
      <Academics/>
      <Admissions/>
      <Faculty/>
      <Students/>
      <Gallery/>
      <Contact/>
    </div>
  )
}

