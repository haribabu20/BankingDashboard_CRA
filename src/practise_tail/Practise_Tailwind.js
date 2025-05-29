import React from 'react'

const Practise = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline text-center mt-10'>Tailwind CSS Practise</h1>
      <div className='flex justify-center items-center mt-10'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Click Me
        </button>
      </div>
      <div className='mt-10 text-center'>
        <p className='text-gray-700'>This is a simple Tailwind CSS example.</p>
      </div>
    </div>
  )
}

export default Practise
