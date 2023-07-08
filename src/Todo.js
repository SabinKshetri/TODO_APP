import React, { useState } from 'react'


export default function Todo() {
  const [activity,setActivity]=useState('')
  const [listData,setListData]=useState([]);
  const addActivity=()=>{
     /*  setListData([...listData,activity])
      console.log(listData)
   */
  setListData((listData)=>{
    const updatedList=[...listData,activity]
    setActivity('');
    return updatedList
  })
  }
  const removeActivity=(i)=>{
      const updatedListData=listData.filter((elem,id)=>{
        return i!=id;
      })
      setListData(updatedListData);
  }
  const removeALl=()=>{
    setListData([])
  }
  return (
    <>
    
    <div className='container'>
      <div className='Header'>TODO LIST</div>
      <input
      type='text'
      placeholder='Add Activity'
      value={activity}
      onChange={(e)=>{
        setActivity(e.target.value)
      }}
      />
      <button onClick={addActivity}>Add</button>
      <p className='list-heading'>Your List:{")"}</p>
      {listData!=[]&& listData.map((data,i)=>{
        return(
          <>
          <p key={i}> 
         
                <div className='list-data'>{data}</div>
                <div className='btn-position'><button onClick={()=>removeActivity(i)}>Remove(-)</button></div>
              
                
          </p>
          </>
        )
      })}
      {listData.length>=1&&
      <button onClick={removeALl}>Remove All</button>}
        
    </div>
    </>
  )
}
