import React, { useState } from 'react'

const Userdata = () => {
    // const [ Userdata, setUserData] = useState(null)
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


    async function handledata () {
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
    <div>
        <input type='text' placeholder='Name' value={name} onChange={handleNameChange}/><br/>
        <input type='number' placeholder='Phone nuber' value={phoneNumber} onChange={handleNumberChange} /><br/>
        <input type='text' placeholder='Location' value={location} onChange={handleLocationChange}/><br/>
        <input type='text' placeholder='Treatment' value={treatment} onChange={handleTreatmentChange}/><br/>
        <button className='btn' onClick={handledata}>Book Now</button>
    </div>
  )
}

export default Userdata;