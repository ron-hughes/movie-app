import React, { useState } from 'react';
import axios from 'axios';

import Movies from './movies';

export default function SearchForm() {

  const [input, setInput] = useState()
  const [data, setData] = useState()

  const handleChange = e => {
    setInput(e.target.value)
    console.log(input)
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=a9758f47&s=${input}`)
      .then(res => {
        setData(res.data.Search)
        console.log(res.data.Search)
      })
      .catch(err => {
        console.log(`*** Error: ${err}`)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Search Movie Titles"
          name="search"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
      <Movies data={data} />
    </div>
  )
}