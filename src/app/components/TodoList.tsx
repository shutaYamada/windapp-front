import React from 'react'
import { Todo } from '../types';

interface TodoListProps {
    todos: Todo[];
}
const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className='space-y-3'>
        {todos.map((todo) => (
            <li className='flex justify-between p-4 bg-white border-l-4 border-blue-500 rounded shadow'  >
            <span>{todo.title}</span>
            <div >
                <button className='text-green-500 mr-3'>Edit</button>
                <button className='text-red-500'>Delete</button>
            </div>
        </li>
    ))}
        
    </ul>
  )
}

export default TodoList
