import React from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../redux/noteapp/noteappSlice'

function Search() {
  const dispatch = useDispatch();
  
  return (
    <div>
      <input
        onChange={(e) => dispatch(search(e.target.value))}
        type='search'
        id='search'
        placeholder='Search'
      />
      <br /><br />
    </div>
  )
}

export default Search
