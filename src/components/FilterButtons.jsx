// FilterButtons is checks task which is completed or not

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterTodos, markAllCompleted } from '../redux/actions';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  return (
    <div className=" gap-1" >

      {/* Select is used for displaying the option  */}
      <select disabled
        className="text-sm px-2 py-1 my-1 rounded border border-gray-300 appearance-none  focus:outline-none" 
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">Default Selected</option>
        <option value="COMPLETED">Completed Selected</option>
        <option value="INCOMPLETE">Incomplete Selected</option>
      </select>

      {/* button is used for performing specifing task  */}

      <button className='text-sm px-2 py-1 my-1 bg-emerald-600 text-white rounded ml-2 hover:bg-slate-600' 
      value="ALL"
      onClick={(e) => handleFilter(e.target.value)}>
        Default
      </button>
      <button className='text-sm px-2 py-1 my-1 bg-emerald-600 text-white rounded ml-2 hover:bg-slate-600'
      value="COMPLETED"
      onClick={(e) => handleFilter(e.target.value)}>
        Complete
      </button>
      <button className='text-sm px-2 py-1 my-1 bg-emerald-600 text-white rounded ml-2  hover:bg-slate-600'
      value="INCOMPLETE"
      onClick={(e) => handleFilter(e.target.value)}>
        Incomplete
      </button>

      <button
        className="text-sm px-2 py-1 my-1 bg-emerald-600 text-white rounded ml-2 right-3"
        onClick={() => dispatch(markAllCompleted())}
      >
        Mark All Completed
      </button>
      
      </div>
        
  );
};

export default FilterButtons;
