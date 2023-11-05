import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const Contact = () => {

const [quote, setQuote] = useState("")

useEffect(() => {
  fetch('https://api.quotable.io/random')
  .then((response)=>response.json())
  .then((data)=>setQuote(data.content))
  .catch((error)=>console.error(error))

}, []);


  return (
    <div>
      <h1 style={{textAlign:"center"}}>QUOTE</h1>
      <div>
        <h2 style={{textAlign:"center",marginTop:"3%"}}>{quote}</h2>
      </div>
      <button onClick={()=>{window.location.reload()}} className='border-0 btn btn-lg bg-light'>Refresh</button>
    </div>
  )
}

export default Contact