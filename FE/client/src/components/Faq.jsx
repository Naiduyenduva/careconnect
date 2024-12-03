import React from 'react'

const Faq = () => {

    const faqArray = [
        {
            summary: "May I speak to a doctor online?",
            answer: "Yes, CareConnect offers online consultations with our expert doctors. You can book an appointment and speak with a doctor remotely."
        },
        {
            summary: "How can CareConnect make my surgery more affordable?",
            answer: "CareConnect negotiates with hospitals and medical providers to secure discounted rates for our patients. We also offer financing options and insurance support."
        },
        {
            summary: "Does CareConnect operate its own hospitals?",
            answer: "No, CareConnect partners with a network of reputable hospitals and medical facilities to provide high-quality care."
        },
        {
            summary: "Is there insurance coverage for all surgeries at CareConnect?",
            answer: "Most surgeries are covered by insurance, but coverage varies depending on your provider and policy. Our insurance support team will help you navigate the process."
        },
        {
            summary: "Does CareConnect offer emergency surgical services?",
            answer: "Yes, CareConnect provides emergency surgical services for urgent cases. Contact our 24/7 support team to arrange immediate care."
        },
        {
            summary: "Do I need to pay any fees to use CareConnect services?",
            answer: "No, using CareConnect's services is free. We don't charge any fees for consultations, bookings, or insurance support."
        },
        {
            summary: "Can I get a second opinion from CareConnect?",
            answer: "Yes, CareConnect offers second opinions from our expert doctors. You can upload your medical records and receive a comprehensive review and recommendation."
        },
        {
            summary: "How do I schedule an appointment with CareConnect?",
            answer: "You can schedule an appointment with CareConnect by visiting our website and filling out the appointment request form. Our support team will contact you to confirm your appointment."
        },

    ]

  return (
    <>
        <section className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className='faq-container'>
                {
                    faqArray.map((item,index)=>(
                    <div className='faq-item' key={index}>
                        <details>
                        <summary className="faq-question">{item.summary}</summary>
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        </details>
                    </div>
                    ))
                }
            </div>
        </section>
    </>
  )
}

export default Faq