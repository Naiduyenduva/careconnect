import React from 'react'
import { useState } from 'react';

const  BookAppointment = () => {

  const [name,setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("")
  const [treatment, setTreatment] = useState("")
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleNumberChange = (event) => {
    setPhoneNumber(event.target.value)
  }
  const handleLocationChange = (event) => {
    setLocation(event.target.value)
  }
  const handleTreatmentChange = (event) => {
    setTreatment(event.target.value)
  }


  async function handledata (event) {
    event.preventDefault()
    try {
        const response = await fetch("http://localhost:3000/",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, phoneNumber, location, treatment })
        });
        if(response.ok) {
          alert("Booking successful, will contact you soon")
        } else {
          throw new Error('hio')
        }
    } catch(err) {
      console.log(err.message)
    }
  }

  return (
    <>
        <section className="careconnect-section">
    <div className="careconnect-container">
      <h2>The surgery you're looking for is just a click away!</h2>
      <div className="careconnect-icons">
        <span>✔ Doctors</span>
        <span>✔ Care Coordinators</span>
        <span>✔ Insurance Support</span>
        <span>✔ Free CAB</span>
      </div>
      <div className="appointment-form">
        <form onSubmit={handledata}>
          <div className="form-row">
            <input type="text" placeholder="NAME" required={true} value={name} onChange={handleNameChange} />
            <input type="number" placeholder="+91 | Phone Number" required={true} value={phoneNumber} onChange={handleNumberChange} />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Location" required={true} value={location} onChange={handleLocationChange} />
            <input type="text" placeholder="Treatment" required={true} value={treatment} onChange={handleTreatmentChange} />
          </div>
          <button >BOOK YOUR APPOINTMENT</button>
        </form>
      </div>
    </div>
  </section>
    </>
  )
}

export default BookAppointment