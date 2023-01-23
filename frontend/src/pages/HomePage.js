import React from 'react'
import { Routes } from 'react-router-dom'
import Text from '../components/Text'
import Carosel from '../components/Carosel'

const HomePage = () => {
  return (
    <div className='row my-3 text-left'>
      <Carosel></Carosel>
      <h3>DASHBOAD</h3>
      
      <Text></Text>
      <div>
      <img src='http://tk.budyawacana.sch.id/joimg/publikasi/680999default-image.jpg'></img>
      </div>
    </div>
  )
}

export default HomePage