import React from 'react'

const DoctorSection = () => {

    const doctorsArray = [
        {
            image : "https://i.ibb.co/k6cNjhB/Manoj.png",
            spantext: "7 Years",
            doctorName: "Dr. S S Manoj",
            doctorProfession: "Cardiothoracic Surgeon",
            alternativetext: "Doctor 1"
        },
        {
            image : "doctor2.jpg",
            spantext: "3 Years",
            doctorName: "Dr. Saurav",
            doctorProfession: "Senior Resident Dentist",
            alternativetext: "Doctor 2"
        },
        {
            image : "https://i.ibb.co/wL3sT37/IMG-1482.jpg",
            spantext: "14 Years",
            doctorName: "Dr. Ajay",
            doctorProfession: "Bariatric Surgeon",
            alternativetext: "Doctor 3"
        },
        {
            image : "https://i.ibb.co/n37yqQj/IMG-1483.jpg",
            spantext: "5 Years",
            doctorName: "Dr. Deepa",
            doctorProfession: "Infertility Specialist",
            alternativetext: "Doctor 4"
        },
        {
            image : "https://i.ibb.co/4Z4wSZs/IMG-1484.jpg",
            spantext: "28 Years",
            doctorName: "Dr. Trikoti",
            doctorProfession: "Urologist",
            alternativetext: "Doctor 5"
        },
        {
            image : "https://i.ibb.co/WVh9Qb5/IMG-1485.jpg",
            spantext: "10 Years",
            doctorName: "Dr. Siva Ram",
            doctorProfession: "General Practitioner",
            alternativetext: "Doctor 6"
        }
    ]

  return (
    <>
    <section className ="doctor-section-container">
    <h2 className ="doctor-section-title">Get Consultation with TOP Doctors in Your City</h2>
    <div className='doctor-section'>
        {
            doctorsArray.map((item,index)=>(
                <div className='doctor-cardss' key={index}>
                <div className='doctor-card'>
                    <div className='image-container'>
                        <img src={item.image} alt={item.alternativetext} />
                        <span className="experience">{item.spantext}</span>
                    </div>
                    <h3>{item.doctorName}</h3>
                    <p>{item.doctorProfession}</p>
                    <button>Call Us</button>
                </div>
                </div>
            ))
        }
    </div>
    </section>
    </>
  )
}

export default DoctorSection