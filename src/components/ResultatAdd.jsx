import React from 'react'

export default function ResultatAdd({name,unit,grade,handleChange,handlePost}) {
  return (
    <div className='results-add'>
      <form className="ui-form" autoComplete='off' onSubmit={handlePost}>
        <h2>New Entry</h2>
         <label htmlFor=''>Name:</label>
         <input name="name" autoFocus required placeholder="name" value={name} type="text" onChange={handleChange}  />
         <label htmlFor=''>Unit:</label>
         <input  name="unit" autoFocus required placeholder="unit" value={unit} type="text"   onChange={handleChange}/>
         <label htmlFor=''>Grade:</label>
         <input  name="grade" autoFocus required placeholder="Grade" value={grade} type="text"   onChange={handleChange} />
          <input type="submit"/>
      </form>
    </div>
  )
}
