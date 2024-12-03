import React from 'react'
import { Link } from 'react-router-dom'
import surgeryItems from '../Data/surgeries'

const Surgeries = () => {

  return (
    <>
        <div>
            <div className='surgeries-container'>
                <h2>Receive expert care for over 50+ advanced surgeries</h2>
                <div className='surgeries-box'>
                    <div className='surgeries-grid'>
                        {
                            surgeryItems.map((item,index) => (
                                <div className='surgery-item' key={index}>
                                    <img src={item.image} alt={item.btnname} />
                                 <Link to={`/surgery/${item.id}`}>
                                    <button className='surgery-btn'>{item.btnname}</button>
                                 </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
export default Surgeries