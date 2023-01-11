import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "../styles/newsletter.css"

const Newsletter = () => {
  return (
    <div className='xnew-container'>
        <div className="xnew-row">
            <div className="xnew-col">
                <h2 className="xnew-title">Newsletter</h2>
                <p className="xnew-desc">Get timely updates from your favorite products.</p>
                <div className="xinput-container">
                    <input type="text" placeholder='Your E-mail' />
                    <button><FontAwesomeIcon icon={faPaperPlane} /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
