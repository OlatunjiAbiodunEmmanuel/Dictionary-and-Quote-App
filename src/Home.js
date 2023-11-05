import React from 'react'
import img from './images/backgrd.jpg'

const Home = () => {
  return (
    <div style={{backgroundImage:`url(${img})`, height:'100vh',backgroundSize:"cover",backgroundRepeat:'no-repeat'}}></div>
  )
}

export default Home