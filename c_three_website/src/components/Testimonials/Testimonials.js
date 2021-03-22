import React from 'react'
import Card from '../../assets/Card/Card'

function Testimonials() {
    return (
      <div>
        <div className="container">
          <h4 className="text-center mt-3 mb-3 ">Testimonials</h4>
          <div className="row">
            <div className="col-sm">
              <Card />
            </div>
            <div className="col-sm">
              <Card />  
            </div>  
            <div className="col-sm">
              <Card />  
            </div>  
            <div className="col-sm">
              <Card />  
            </div>  
          </div>
        </div>
      </div>
    )
}

export default Testimonials
