import React from 'react'
import Card from '../../assets/Card/Card'

function Testimonials() {
    return (
      <div>
        <div className="container">
          <h4 className="text-center mt-3">Testimonials</h4>
          <div className="row mt-3">
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
          <div className="d-flex justify-content-center">
            <a 
              href="https://www.google.com/search?hl=en-US&gl=us&q=C+Three+Logistics+Llc,+22+Gorgo+Ln,+Newfield,+NJ+08344&ludocid=2101322990516521539&lsig=AB86z5XXnz8pTafJVfXeJrelHNRZ#lrd=0x89c72cf8c7c56a1b:0x1d29662068194a43,1,,," 
              className="btn btn-success mr-4"
            >
            Reviews
            </a>
            <a 
              href="https://www.google.com/search?hl=en-US&gl=us&q=C+Three+Logistics+Llc,+22+Gorgo+Ln,+Newfield,+NJ+08344&ludocid=2101322990516521539&lsig=AB86z5XXnz8pTafJVfXeJrelHNRZ" 
              className="btn btn-border-success ml-4"
            >
            More Information
            </a>
          </div>
        </div>
      </div>
    )
}

export default Testimonials
