import React from 'react'
import imageOne from '../../../assets/images/red_truck.jpg'
import imageTwo from '../../../assets/images/blue_truck.jpg'
import imageThree from '../../../assets/images/trucks.jpg'
import imageFour from '../../../assets/images/black_truck.jpg'

const SlideShow = () => {

  return (
    <div>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="2000">
            <img src={imageOne} className="d-block w-100" alt="Red Truck"/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={imageTwo} className="d-block w-100" alt="Blue Truck"/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={imageThree} className="d-block w-100" alt="Blue Truck"/>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={imageFour} className="d-block w-100" alt="Blue Truck"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideShow
