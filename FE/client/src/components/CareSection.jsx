import React from 'react'

const CareSection = () => {

    const careSimplified = [
        {
            maintext: "Get Professional Care",
            paragraphtext: "We locate the best doctors and facilities for your procedure.",
            image: "https://i.ibb.co/kKHchqX/doct.png"
        },
        {
            maintext: "Paperless Process",
            paragraphtext: "We manage the paperwork, giving you the freedom to relax.",
            image : "https://i.ibb.co/gMrnMG6/Paperless.jpg"
        },
        {
            maintext: "Insurance Support",
            paragraphtext: "We collaborate with your insurance provider for quick approvals.",
            image : "https://i.ibb.co/rpw1ftc/insurance-support.jpg"
        },
        {
            maintext: "Flexible Payment Options",
            paragraphtext: "Easily pay for your care with monthly installments.",
            image : "https://i.ibb.co/JqwmcS8/M-Payments.png"
        },
        {
            maintext: "Return Home Faster",
            paragraphtext: "Our innovative techniques promote a quicker and safer recovery.",
            image : "https://i.ibb.co/b6vVW3t/fast.png"
        },
        {
            maintext: "Get Peace Of Mind",
            paragraphtext: "Our modern procedures are designed to enhance your recovery speed and safety.",
            image : "https://i.ibb.co/D5d7WCm/peace-of-mind.jpg"
        },
        {
            maintext: "Zero-Charge Pick-Up & Drop-Off",
            paragraphtext: "We'll work as fast as possible after booking.",
            image : "https://i.ibb.co/vQWGsg1/Cab.jpg"
        },
        {
            maintext: "Book Consultation",
            paragraphtext: "We’ll work as fast as possible after booking.",
            image: "your-image-url.jpg"
        }
    ]

  return (
    <>
        <section className='care-section'>
        <h2>Your Care, Simplified</h2>
        <div className='care-services-grid'>
            {
                careSimplified.map((item,index)=>(

                <div className="service-item">
                    <div className='service-text'>
                        <h3>{item.maintext}</h3>
                        <p>{item.paragraphtext}</p>
                    </div>
                    <img src={item.image} alt={item.maintext} className="right-image" />
                </div>
                ))
            }
        </div>
        </section>
    </>
  )
}

export default CareSection