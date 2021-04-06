import React from 'react'

const Card = () => {

  const cardDetails = [
    {
      username: 'Donald C',
      date: 'February 2021',
      comment: 'Great service',
    },
    {
      username: 'papi 78',
      date: 'March 2021',
      comment: 'Good place',
    },
    {
      username: 'Mark Mungiole',
      date: 'October 2020',
      comment: '',
    },
    {
      username: 'Scott Bergelt',
      date: 'March 2021',
      comment: '',
    },
  ];

  const renderCard = (card, index) => {
    return (
      <div className="card mb-4" key={index}>
        <div className="card-body">
          <div className="row">
            <div className="inline">
              <h6 className="card-subtitle text-muted text-center mb-2">{card.username}</h6>
              <div className="text-center">
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
                <i className="fas fa-star text-warning"></i>
              </div>
            </div>
          </div>
          <div className="card-text text-center mb-2">{card.date}</div>
          <p className="card-text text-center">{card.comment}</p>
        </div>  
      </div>   
    )
  }

  return (
  <>
    {cardDetails.map(renderCard)}
  </>
  )
};

export default Card
