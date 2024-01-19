import { useState } from 'react'
import './App.css'
import HeroImage from './component/HeroImage'
import ConsultationForm from './component/ConsultationForm'
import Testimonials from './component/Testimonials'

function App() {

  return (
    <div className=' bg-black'>
      <HeroImage/>
      <ConsultationForm/>
      <Testimonials/>
    </div>
  )
}

export default App
