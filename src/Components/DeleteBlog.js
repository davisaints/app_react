import React, { useState } from 'react'
import { deleteBlog } from '../Request/Request'
import ClayForm, { ClayInput } from "@clayui/form"
import ClayButton from "@clayui/button"

export default function DeleteBlog() {
   const [id, setId] = useState('');
   
   function DELETE() {
       deleteBlog(id);
   }

   return (
    <>
        <br />

        <h2>DELETE:</h2> <br />

        <ClayForm>
           <ClayForm.Group>
               <label htmlFor='basicInput'>BLOG ID</label>
               <ClayInput
               id='id'
               onChange={(event) => setId(event.target.value)}
               placeholder='id'
               type='text'
               value={id}
               />
           </ClayForm.Group>
        </ClayForm>

        <ClayButton displayType='primary' onClick={() => DELETE()}>Delete Blog</ClayButton>
    </>
    ); 
}

