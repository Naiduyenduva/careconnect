import React from 'react'

const  BookAppointment = () => {
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
        <form>
          <div className="form-row">
            <input type="text" placeholder="NAME" />
            <input type="number" placeholder="+91 | Phone Number" />
          </div>
          <div className="form-row">
            <input type="text" placeholder="Location" />
            <input type="text" placeholder="Treatment" />
          </div>
          <button>BOOK YOUR APPOINTMENT</button>
        </form>
      </div>
    </div>
  </section>
    </>
  )
}

export default BookAppointment