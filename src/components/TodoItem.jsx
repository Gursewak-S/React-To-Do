//TodoItem is used for adding Task

import { useDispatch } from 'react-redux';
import {
  removeTodo,
  markCompleted,
  markIncomplete,
} from '../redux/actions';

//Here we are importing react-icon
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { ImCheckboxChecked } from "react-icons/im";
import { RiDeleteBin2Fill } from "react-icons/ri";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  return (
    <li className="flex  sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">
          {index + 1}.
        </span>
        <span className={`mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.text}
        </span>
      </div>
      <div className='space-x-3 ml-8'>
        {!todo.completed && (
          <button 
            className="text-xl sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markCompleted(index))}
          >
            <MdCheckBoxOutlineBlank />
          </button>
        )}
        {todo.completed && (
          <button
            className="text-xl text-sky-500 sm:px-2 px-1 py-1 rounded"
            onClick={() => dispatch(markIncomplete(index))}
          >
            <ImCheckboxChecked />
          </button>
        )}
        <button
          className="mr-2 text-2xl bg-grey text-red-700 rounded"
          onClick={() => dispatch(removeTodo(index))}
        >
          <RiDeleteBin2Fill />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
