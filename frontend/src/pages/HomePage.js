import React from 'react'
import { Routes } from 'react-router-dom'
import Carosel from '../components/Carosel'
import Gloss from '../images/Gloss.jpg'
import Super from '../images/Super.jpg'
import Pro from '../images/Pro.jpg'


const HomePage = () => {
  return (
    <div className='row my-3 text-left'>
     <div className='row my-3 text-center'>
      <h3>Home Page</h3>
      <div className='w-100 text-center'>
      <p>Welcome to Dashboard Nazar Paint App.</p>
      <div className='row'>
        <div className='col-4'>
          <div className='card'>
            <img className='img-card-top' src={Gloss}></img>
            <div className='card-body'>
              <div className='home-icons'>

                <h5>Gloss Type</h5>
              </div>
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className='card'>
            <img className='img-card-top' src={Super}></img>
            <div className='card-body'>
              <div className='home-icons'>

                <h5>Super Type</h5>
              </div>
            </div>
          </div>
        </div>
        <div className='col-4'>
          <div className='card'>
            <img className='img-card-top' src={Pro}></img>
            <div className='card-body'>
              <div className='home-icons'>

                <h5>Pro Type</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default HomePage