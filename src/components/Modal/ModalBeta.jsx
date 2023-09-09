import React, { useEffect } from 'react'
import './BetaModall.css'

export default function ModalBeta({ show, onClose }) {
    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [show])


  return (
    <div className='beta-modal-overlay'>
        <div className='beta-modal'>
            <h2>Beta section is under development</h2>
            <button className='close-button' onClick={onClose}>Close</button>
        </div>
    </div>
  )
}
