import React, { useState } from 'react'
import './searchbar.css'
const SearchBar = () => {
  const [data,setData] = useState([]);
  const handleData = (event) =>{
    const searchWord = event.target.value

    if (searchWord === "") {
        setData([])
    }else{
        setData(["newFilter"])
    }
  }

  return (
    <div className="search">
        <input className="search-input" type="text" placeholder=" Enter a product name"></input>
        <button className="search-button">
            <i className="material-icons">search</i>
        </button>
    </div>
  )
}

export default SearchBar