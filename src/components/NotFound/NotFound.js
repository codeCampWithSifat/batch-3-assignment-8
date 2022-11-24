import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='container text-center'>
      <h2 className='text-danger mt-5'>This Page Is In Development Mod </h2>
       <Link to="home">
         <button className='btn btn-info mt-2'>Go To Home Page </button>
       </Link>
    </div>
  )
}

export default NotFound
