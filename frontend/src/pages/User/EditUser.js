import React, {useState, useEffect} from 'react'
import { accountPayment, editPayment} from '../../axios/paymentAxios'
import {useNavigate, useParams} from 'react-router-dom'

const EditPayment = () => {
const [form, setForm] = useState({
  name: '',
  status: '',
  job: '',
  salary: 0
})

const navigation = useNavigate()
const params = useParams()

const getPaymentInfo = () => {
  const {id} = params
  accountPayment(id, result => {
      setForm({
          name: result.name, 
          status: result.status,
          job: result.job,
          salary: result.salary
      })
      console.log(result)
  })
}

useEffect(() => {
   getPaymentInfo()
}, [])

const submitHandler = () => {
  editPayment(+params.id, form)
  navigation('/payments')
}

  return (
    <>
    <div className='row my-3'>
      <div className='w-100 text-center'>
      <h5>Edit Payment</h5> 
      </div>
      <div className='w-50 mx-auto'>
      <hr></hr> 
        <div className='mb-3'>
          <label>Name: </label>
          <input
          value={form.name}
          onChange={(e) => setForm({...form, name: e.target.value })}
          type='text'
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>Status </label>
          <input
          value={form.status}
          onChange={(e) => setForm({...form, status: e.target.value })}
          type='text'
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>Job </label>
          <input
          value={form.job}
          onChange={(e) => setForm({...form, job: e.target.value })}
          type='text'
          className='form-control'></input>
        </div>
        <div className='mb-3'>
          <label>Salary </label>
          <input
          value={form.salary}
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

export default EditPayment