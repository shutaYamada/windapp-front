import React from 'react'

const AddTask = () => {
  return (
    <form className='mb-4 space-y-3' action="">
        <input className='w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400' type="text" />
        <button className='w-full px-4 py-2 text-white bg-blue-500 transform hover:bg-blue-400 hover:scale-95 duration-200'>
            Add Task
        </button>
    </form>
  )
}

export default AddTask
