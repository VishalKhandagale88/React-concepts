import  { FC, useState } from 'react'

const UseStateLearning:FC = () => {
  const[drink,setDrink] = useState({
    title:"Indian",
    price:5
  })
  const handleClick = () =>{
    setDrink({...drink,price: 6})
  }
  return (
    <div>
      <h1>Updatating An Object</h1>
      <div>{drink.title}</div>
      <div>{drink.price}</div>
    <button onClick={handleClick}>Click here</button>
    </div>
  )
}

export default UseStateLearning
