import React from 'react'


 function TodoItem({item}) {
  //  console.log(item)
  //  const[clName, setStyle]=React.useState("btn")
  //  const changeStyle=()=>{
  //    setStyle("btn2")
  //  }
  return (
    <>
        <h2>{item.title}</h2>
        {/* <button className={clName} onClick={changeStyle()}>complete</button> */}
    </>
  )
}
export default TodoItem