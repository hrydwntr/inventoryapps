import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import {
    HomePage, 
    User
} from '../pages'

const MainContent = () => {
  return (
    <div className='container p-3'>
      <Routes>
      <Route path='' element={
        <HomePage></HomePage>
      }></Route>

      <Route path='users' element={
        <User></User>
      }></Route>

        </Routes>
    </div>
  )
}

export default MainContent