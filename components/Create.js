import React, { useState } from 'react'
import supabase from "./supabaseClient";
function Create() {
    const [title,setTitle]=useState('')
    const handleSubmit = async (e) =>{
      e.preventDefault()
    
      const {data}= await supabase
      .from('smoothies')
      .insert([{title}])
    }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
        className='bg-red-400'
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      
    </form>

  );
}

export default Create