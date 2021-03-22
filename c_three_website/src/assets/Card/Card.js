import React from 'react'

const Card = () => {

  return (
    <>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="inline">
              <h6 className="card-subtitle text-muted text-center">Donald C</h6>
              <div className="text-center">
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
              </div>
            </div>
          </div>
          <div className="card-text text-center mb-3">A month ago</div>
          <p className="card-text text-center">"Great service"</p>
        </div>  
      </div>   
    </>
  )
}

export default Card
