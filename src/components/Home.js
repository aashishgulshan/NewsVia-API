import React from 'react'
import Catgory from './Catgory'
function Home() {
  return (
    <>
        <div className='text-center bg-sky-500 p-10 border-t-8 border-yellow-400'>
        {/* <h1 className=' text-violet-700 font-semibold text-3xl'>NewsVia API</h1> */}
        <p className='font-semibold font-sans text-white'>Get fastest news and stay upto-dated with NewsVia API</p>
      </div>
      <Catgory/>

    </>
  )
}

export default Home