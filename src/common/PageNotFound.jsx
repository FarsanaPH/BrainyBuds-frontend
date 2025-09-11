import React from 'react'
import Img from "../../public/assets/pagenotfound.png"

function PageNotFound() {
  return (
    <>
    <div className='flex justify-center items-center min-h-screen'>
      <img src={Img} alt="Image" />
    </div>
    </>
  )
}

export default PageNotFound