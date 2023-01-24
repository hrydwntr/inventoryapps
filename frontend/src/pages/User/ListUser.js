import React,{useState,useEffect} from 'react'
// import { getPayments, removePayment } from "../../axios/paymentAxios";
// import LoadingBar from "../../helpers/LoadingBar";
import { GoDiff } from 'react-icons/go';
import { 
  Link, useNavigate
 } from 'react-router-dom';

const ListPayment = () => {

    const [payments, setPayment] = useState([])

    const navigate = useNavigate()

// const [getPaymentTrigger, setGetPaymentTrigger] = useState(true)
useEffect(() => {
getPayments(result => setPayment(result))
}, [])

const deleteHandler = (id) => {
  removePayment(id)
  // , (result) => setGetPaymentTrigger(!getPaymentTrigger(result)))
  // getPayments(result => setPayment(result))
  navigate('/')
}

  return (
    // yang disebut react fragment
    <>
          <div className="row my-3 text-center">
        <div className="col-9 mx-auto">
          <div className='w-100'>
          <Link to='/payments/create' className="btn btn-sm btn-primary my-2">
          <span className="me-2">
            <GoDiff></GoDiff>
          </span>
          Add Payment
        </Link>

          </div>
        <div className="w-100">
          <table className="table table-borderd">
            <thead>
              <tr className="">
              <th>Id</th>
                <th>Name</th>
                <th>Status</th>
                <th>Job</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                payments.length > 0 ?
                payments.map(payment => {
                  const {id, name, status, job, salary} = payment
                  return (
                    <tr key={id}>
                      <td>{id}</td>
                      <td>{name}</td>
                      <td>{status}</td>
                      <td>{job}</td>
                      <td>{salary}</td>
                      <td>
                        <Link to={`/payments/update/${id}`} className="btn btn-sm btn-info">Edit</Link>
                        <button 
                        onClick={() => deleteHandler(+id)}
                        className='btn btn-sm btn-danger'>Delete</button>
                      </td>
                    </tr>
                  ) 
                }) : <LoadingBar>Loading</LoadingBar>
              }
              <tr></tr>
            </tbody>
          </table>
        </div>
        </div>
      </div>
    </>
  )
}

export default ListPayment