import React from 'react';
function Error() {
  return (
    <div className=' min-h-screen bg-slate-500'>
        <h1 className="flex justify-center items-center md:text-2xl lg:text-3xl font-bold text-yellow-400 bg-gray-900 border-t-2 border-yellow-400 p-2 gap-2">'404' Page Not Found</h1>
        <div className='flex flex-wrap justify-center container items-center gap-5'>
            <div className='my-auto mx-auto font-sans text-center font-bold'>
                <h1 className='text-6xl text-yellow-400 rounded-xl p-2'>OOPS!</h1>
                <p className='text-3xl py-2'>We can't seem to find what you're looking for.</p>
                <p className='py-2 text-xl'>Error Code: '404'</p>
                <br/>
                <a className='text-xl text-yellow-500 bg-gray-900 py-2 px-4 rounded-lg'
                 href='https://news-via-api.vercel.app/'>
                Homepage
                </a>
            </div>
            
            <img className=' w-80 my-10' src="https://images.marketpath.com/9dda7041-2870-4a96-bf1e-dd8342e86e7c/image/90696861-1678-4da4-8b42-464105849f4a/errorpages-01.svg" alt="Error Pcture" />
        </div>
    </div>
  )
}

export default Error;