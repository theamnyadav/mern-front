import React from 'react'
import supabase from "./supabaseClient";

function Image() {
    async function uploadImage(e){
        let file = e.target.files[0]
        const {data} = await supabase 
        .storage
        .from('images')
        .upload('/')
    }
  return (
    <div>
        <input type='file' accept='images/png, images/jpg' onChange={(e)=>uploadImage(e)} />
    </div>
  )
}

export default Image