import React from 'react'
import image1 from '../images/5. TAMPAK DALEM.jpg'
import image2 from '../images/3. CAR WASH.png'
import image3 from '../images/1. Aksesoris.jpg'

const Carosel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={image1} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={image1} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={image1} className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default Carosel