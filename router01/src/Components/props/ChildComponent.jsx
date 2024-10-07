import React from 'react'

const ChildComponent = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.contact}</p>
      <p>{props.address}</p>
    </div>
  )
}

export default ChildComponent
