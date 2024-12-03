import React from 'react'

const SpecialitiesSection = () => {

    const specialitiesarray = [
        {
            image: "https://i.ibb.co/4sLvmCj/cosmotic.jpg",
            title: "Cosmetic",
            description: "Transforming looks through surgical techniques."
        },
        {
            image: "https://i.ibb.co/wBdp3pt/Urology.jpg",
            title: "Urology",
            description: "Treatment for urinary tract and male reproductive issues."
        },
        {
            image: "https://i.ibb.co/thm2sBn/Laproscopy.png",
            title: "Laparoscopy",
            description: "Identifying and managing digestive issues."
        },
        {
            image: "https://i.ibb.co/nbY7x2V/practology.jpg",
            title: "Proctology",
            description: "Digestive health, focusing on the anus and rectum."
        },
        {
            image: "https://i.ibb.co/37bFPT0/Vascular.jpg",
            title: "Vascular",
            description: "Treating conditions of the blood vessels and circulatory system."
        },
        {
            image: "https://i.ibb.co/qDS8WH2/orthopedics-1.jpg",
            title: "Orthopaedics",
            description: "Treatment for bones, joints, muscles, and associated injuries."
        },
        {
            image: "https://i.ibb.co/D17KRY1/neurology.jpg",
            title: "Neurology",
            description: "Identifying and treating nervous system diseases."
        },
        {
            image: "https://i.ibb.co/TMqh67V/Ophthalmology.jpg",
            title: "Ophthalmology",
            description: "Care for the eyes, including treatment of diseases, surgery, and sight correction."
        }
    ];

    const whycareconnectarray = [
        {
            title: "Providing a Hassle-Free Surgical Experience in India",
            description1: "" 
        },
        {
            title: "Supportive Surgical Experience",
            description1: "A dedicated Care Coordinator supports you throughout your surgical experience, managing tasks like insurance paperwork, providing free transportation to and from the hospital, and facilitating the admission and discharge processes." 
        },
        {
            title: "Smart Healthcare Solutions",
            description1: "Our surgeons are committed to understanding your condition, dedicating time to thorough diagnoses and assisting with pre-surgery evaluations. We offer advanced laser and laparoscopic procedures, all fully USFDA approved." 
        },
        {
            title: "Rehabilitation After Surgery",
            description1: ">We ensure that every patient receives free follow-up consultations and comprehensive guidance, including dietary tips and exercise recommendations, to facilitate a smooth recovery and reestablish their daily routines." 
        }
    ]
  return (
    <>
        <section className='specialties-section'>
        <h2>Find experts from 10+ specialties</h2>
            <div className='specialties-grid'>
                {
                    specialitiesarray.map((item,index)=>(
                        <div className='specialty-item' key={index}>
                        <img src={item.image} alt={item.title} />
                            <div className ="specialty-text">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    </>
  )
}

export default SpecialitiesSection