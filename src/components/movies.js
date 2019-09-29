import React from 'react'

export default function Movies(props) {
  
  return (
    <div>
      {props.data && props.data.map((movie, index) => {
        return (
          <div style={{ display: 'inline-block'}} key={index}>
              <div>
            <h2>{movie.Title}</h2>
            <h4>{movie.Year}</h4>
            <img src={movie.Poster} alt={`${movie.Title} Poster`} />
            </div>
          </div>
        )
      })}
    </div>
  )
}