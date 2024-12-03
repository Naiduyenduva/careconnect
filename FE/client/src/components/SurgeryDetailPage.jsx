import React from 'react'
import surgeryItems from '../Data/surgeries'
import { useParams } from "react-router-dom";


const SurgeryDetailPage = () => {
  const { id } = useParams();
  const surgery = surgeryItems.find((prod) => prod.id === parseInt(id));

  return (
    <>
      <div className='surgery-detailspage'>
          <div key={surgery.id}>
            <h1><strong>{surgery.btnname}</strong></h1>
            <p>{surgery.description}</p>
              {
                surgery.advantages.map((item,index)=>(
                  <ul key={index}>
                    <li>{item}</li>
                  </ul>
                ))
              }
          </div>
      </div>
    </>
  )
}

export default SurgeryDetailPage