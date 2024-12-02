import React from 'react'
import Surgeries from './Surgeries'
import CareSection from './careSection'
import SpecialitiesSection from './SpecialitiesSection'
import DoctorSection from './DoctorSection'
import BookAppointment from './BookAppointment'
import Faq from './Faq'
import Footer from './Footer'
import Navbar from './Navbar'
import Header from './Header'
const Landing = () => {
  return (
    <>
        <div>
            <Header />
            <div className='about-container'>
              <div className='about'>
                <h1>Welcome to care Connect</h1>
                <p>Your trusted partner for elective surgeries. We provide personalized care and support in every step for the hospitalization.</p>
              </div>
            </div>
            <Surgeries />
            <CareSection />
            <SpecialitiesSection />
            <DoctorSection />
            <BookAppointment />
            <Faq/>
            <Footer/>
        </div>
    </>
  )
}

export default Landing