import React from 'react'
import surgeryItems from '../Data/surgeries'
import { useParams } from "react-router-dom";


const SurgeryDetailPage = () => {
  const { id } = useParams();
  const surgery = surgeryItems.find((prod) => prod.id === parseInt(id));

  return (
    <>
    <div key={surgery.id}>
      <h1>{surgery.id}</h1>
      <h1>{surgery.btnname}</h1>
      <div>SurgeryDetailPage</div>
    </div>
    </>
  )
}

export default SurgeryDetailPage