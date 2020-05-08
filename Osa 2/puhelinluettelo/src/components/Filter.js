import React from 'react'



const Filter = ({handleFilter}) => {
    return ( 
      <div>
        <p>Filter shown with <input onChange={handleFilter}></input></p>
      </div>
    )
  }

  export default Filter
