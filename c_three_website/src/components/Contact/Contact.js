import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="container">
      <h4 className="text-center mt-3 mb-3">Contact Us</h4>
        <div>
          <iframe 
            title="CThree Logistics HQ"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3076.7827456626883!2d-75.01497798463048!3d39.541954779476356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c72cf8c7c56a1b%3A0x1d29662068194a43!2sC%20Three%20Logistics%20Llc!5e0!3m2!1sen!2sus!4v1616464434922!5m2!1sen!2sus" 
            width="1100" 
            height="500" 
            allowFullScreen="" 
            loading="lazy"
          >
          </iframe>
        </div>
        <div className="row">
          <div className="col-sm">
            <div className="card bg-transparent border border-light">
              <div className="card-body">
                <h5 className="card-title text-center">Contact</h5>
                <p className="text-center">Phone #: (856) 265-0704</p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card bg-transparent border border-light">
              <div className="card-body">
                <h5 className="card-title text-center">Address</h5>
                <p className="text-center">
                  22 Gorgo Lane
                  Newfield, NJ 08344
                  United States
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div className="card bg-transparent border border-light">
              <div className="card-body">
                <h5 className="card-title text-center">Business Hours</h5>
                <p className="text-center">Open 7 days a week - 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
};

export default Contact;
