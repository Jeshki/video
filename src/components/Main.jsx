import React from 'react'
import desert from '../assets/desert.mp4'
import '../index.css'

const Main = () => {
  return (
    <div className='main'>
      <div className='filter'></div>
        <video src={desert} autoPlay loop muted/>
        <div className='content'>
          <h2>Žmones galima pažinti tada, kai jie dirba sau artimą darbą.</h2>
           <p>Alberto Moravia</p>
        </div>
      </div>  
  )
}

export default Main