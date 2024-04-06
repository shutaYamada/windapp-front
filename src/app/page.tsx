import Image from 'next/image'
import TodoList from './components/TodoList'
import AddTask from './components/AddTask'

export default function Home() {
  return (
    <div className='flex flex-col items-center  justify-center min-h-screen py-2 bg-gray-200'>
      <h1 className='text-4xl font-bold text-gray-700'>todoApp</h1>
      <div>
        <div>
          <AddTask />
          <TodoList />
        </div>
      </div>
    </div>
  )
}
