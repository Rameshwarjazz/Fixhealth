import { useState } from 'react'
import './App.css'
import HeroImage from './component/HeroImage'
import ConsultationForm from './component/ConsultationForm'
import Testimonials from './component/Testimonials'

function App() {

  return (
    <div className=' bg-gradient-to-r from-black via-gray-300 to-white'>
      <HeroImage/>
      <ConsultationForm/>
      <Testimonials/>
    </div>
  )
}

export default App
