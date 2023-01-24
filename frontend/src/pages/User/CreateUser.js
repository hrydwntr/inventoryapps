import React, {useState} from 'react'
import {addPayment} from '../../axios/paymentAxios'
import {useNavigate} from 'react-router-dom'

const CreatePayment = () => {
const [form, setForm] = useState({
  name: '',
  status: '',
  job: '',
  salary: ''
})

const navigation = useNavigate()
const submitHandler = () => {
  addPayment(form)
  navigation('/payments')
}

  return (
    <>
    <div className='row my-3'>
      <div className='w-100 text-center'>
      <h5>CreatePayment</h5> 
      </div>
      <div className='w-50 mx-auto'>
      <hr></hr> 
        <div className='mb-3'>
          <label>Name: </label>
          <input
          onChange={(e) => setForm({...form, name: e.target.value })}
          type='text'
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>Status </label>
          <input
          onChange={(e) => setForm({...form, status: e.target.value })}
          type='text'
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>Job </label>
          <input
          onChange={(e) => setForm({...form, job: e.target.value })}
          type='text'
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>Salary </label>
          <input
          onChange={(e) => setForm({...form, salary: e.target.value })}
          type='text'
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <button onClick={() => submitHandler()} className='btn btn-block btn-primary'>Submit</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default CreatePayment