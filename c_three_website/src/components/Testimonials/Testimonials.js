import React from 'react'
import Card from '../../assets/Card/Card'

function Testimonials() {
    return (
      <div>
        <div className="container">
          <h4 className="text-center mt-3 mb-3">Testimonials</h4>
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
          <div className="d-flex justify-content-center">
            <a 
              href="https://www.google.com/search?hl=en-US&gl=us&q=C+Three+Logistics+Llc,+22+Gorgo+Ln,+Newfield,+NJ+08344&ludocid=2101322990516521539&lsig=AB86z5XXnz8pTafJVfXeJrelHNRZ#lrd=0x89c72cf8c7c56a1b:0x1d29662068194a43,1,,," 
              className="btn btn-success mr-4"
            >
            Reviews
            </a>
            <a 
              href="https://www.google.com/search?hl=en-US&gl=us&q=C+Three+Logistics+Llc,+22+Gorgo+Ln,+Newfield,+NJ+08344&ludocid=2101322990516521539&lsig=AB86z5XXnz8pTafJVfXeJrelHNRZ" 
              className="btn btn-success ml-4"
            >
            More Information
            </a>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <iframe 
              title="CThree Logistics HQ"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3076.7827456626883!2d-75.01497798463048!3d39.541954779476356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c72cf8c7c56a1b%3A0x1d29662068194a43!2sC%20Three%20Logistics%20Llc!5e0!3m2!1sen!2sus!4v1616464434922!5m2!1sen!2sus" 
              width="450" 
              height="350" 
              allowFullScreen="" 
              loading="lazy"
            >
            </iframe>
          </div>
        </div>
      </div>
    )
}

export default Testimonials
