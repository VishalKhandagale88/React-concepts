import { FC, useState } from 'react'

const UpdatingAnArray:FC = () => {4
    const[tags,setTags] = useState(['happy','cheerful']);
    const handleOnclickAddElemet = () =>{
        // Add Element
        setTags([...tags,"exiting"])
    }
    const handleOnclickRemoveElement = () =>{
        setTags(tags.filter(tag => tag !== 'happy'))
    }
    const handleOnClickUpdateElement = () =>{
        setTags(tags.map(tag => tag==='happy'?"happiness":tag))
    }
  return (
    <div>
        <h1>Updating An Array</h1>
      {tags.map((item)=>
      <div>{item}</div>    
      )}
      <button onClick={handleOnclickAddElemet}>Add Element</button>
      <button onClick={handleOnclickRemoveElement}>Remove Element</button>
      <button onClick={handleOnClickUpdateElement}>Update Element</button>
    </div>
  )
}

export default UpdatingAnArray
