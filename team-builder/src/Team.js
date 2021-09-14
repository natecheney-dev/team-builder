import React from 'react'

export default function Team(props) {
  const { details } = props

  if (!details) {
    return <h3>Working fetching your team...</h3>
  }

  return (
    <div className='friend container'>
      <p>Name: {details.name}</p>
      <p>Age: {details.age}</p>
      <p>Email: {details.email}</p>
      <p>Phone: {details.phonee}</p>
      <p>State: {details.state}</p>
      <p>Role: {details.role}</p>
    </div>
  )
}
