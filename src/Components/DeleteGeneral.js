import React, { useState } from 'react'
import { deleteGeneral } from '../Request/Request'
import ClayForm, { ClayInput, ClaySelect } from "@clayui/form"
import ClayButton from "@clayui/button"

export default function DeleteGeneral() {
   const [id, setId] = useState('');
   const [ local, setLocal] = useState('');
   const options = [
        {
            label: 'Delete location', 
            value: ''
        }, 
        {
            label: 'Documents', 
            value: 'documents'
        }, 
        {
            label: 'Blog-Posting', 
            value: 'blog-postings'
        }, 
        {
            label: 'Knowledge',
            value: 'knowledge-base-articles'
        }
   ]

   function DELETE() {
       deleteGeneral(local, id);
   }

   return (
    <>
        <br />

        <h1>DELETE</h1> <br/>

        <h2>BLOGS, DOCUMENTS AND KNOWLEDGEBASE:</h2> <br />
            <ClaySelect aria-label = 'Select Label'
                id = 'mySelectId' onChange = { (e) => setLocal(e.target.value) }>
                    { options.map(item => (
                        <ClaySelect.Option
                        key = {item.value}
                        label = { item.label }
                        value = { item.value }
                        />
                    ))}
            </ClaySelect>
            <ClayForm>
            <ClayForm.Group> <hr />
                <label htmlFor='basicInput'>DOCUMENT ID</label>
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

