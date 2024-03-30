import { FC, useState } from "react";

const UpdatingAnArrayOfObject: FC = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: true },
  ]);
const handleOnClickBug = () =>{
    setBugs(bugs.map(
        bug => bug.id === 1 ? {...bug,fixed:true}:bug
    ))
}
  return (
    <div>
      <h1>Updating An Array Object</h1>
      <div>
        {bugs.map((item) => (
          <>
            <div>id : {item.id}</div>
            <div>Title : {item.title}</div>
            <div>Bug Fixed : {item.fixed ? "yes":"No"}</div>
            <button onClick={handleOnClickBug}>Bug Fixed</button>
          </>
        ))}
      </div>
    </div>
  );
};

export default UpdatingAnArrayOfObject;
