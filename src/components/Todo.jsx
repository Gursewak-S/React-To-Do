import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import { addTodo  } from '../redux/actions';

const Todo = () => {
  const dispatch = useDispatch();
  const [newTodoText, setNewTodoText] = useState('');

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleAddTodoClick = () => {
    if (newTodoText.trim() !== '') {
      handleAddTodo(newTodoText.trim());
      setNewTodoText('');
     
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-5 sm:mt-8 p-4 bg-gray-200 rounded-2xl ">
      <h2 className='mt-3 mb-6 text-5xl font-bold text-center  text-slate-900'>Todo List</h2>
      <div className="flex items-center mb-4">
        <input
          id="addTodoInput"
          className="flex-auto p-2  bg-slate-900 text-white border-b-2 rounded-lg focus:border-blue-400"
          type="text"
          placeholder="Add Your New Todo"
          value={newTodoText}
          onChange={(e) => setNewTodoText(e.target.value)}
        />
        <button
          className="ml-4 p-2 bg-emerald-600 text-white rounded hover:bg-emerald-500 focus:outline-none"
          onClick={handleAddTodoClick}>
          ADD
        </button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButtons />

      </div>

      <TodoList />
    </div>
  );
};

export default Todo;
