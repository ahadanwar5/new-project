import React from 'react'
import "../styles/trustDisplay.css"

import {
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";


const Newsletter = () => {
  return (
    <div className='xnew-container'>
        <div className="xnew-row">
            <div className="xnew-col">
                <h2 className="xnew-title">Trusted by 1000+ Customers</h2>
                <p className="xnew-desc">We're on a mission to make your access to healthcare easier than ever.</p>
                <div>
                  <Link to={'/shop'}>
                  <Button style={{marginTop:'10px',width:'200px'}} color="primary">
                    Shop Now!
                  </Button>
                  </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter
