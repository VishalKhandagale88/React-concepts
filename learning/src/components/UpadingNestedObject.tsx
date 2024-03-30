import { FC, useState } from 'react'

const UpadingNestedObject:FC = () => {
    const[customer,setCustomer] = useState({
        name:"john",
        address:{
            city:"Mumbai",
            zipCode:400076
        }
    })
    const handleClick = () =>{
        setCustomer({
            ...customer,
            address:{...customer.address,city:"Chennai"}
        })
    }
  return (
    <div>
        <h1>Update Nested Object</h1>
      <div>Customer Name : {customer.name}</div>
      <div>Customer City : {customer.address.city}</div>
      <div>ZipCode : {customer.address.zipCode}</div>
      <button onClick={handleClick}>Change ZipCode</button>
    </div>
  )
}

export default UpadingNestedObject
