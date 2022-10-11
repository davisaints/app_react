import React, { useState } from 'react'
import { knowledgeUpdate } from '../Request/Request'
import ClayForm, { ClayInput } from "@clayui/form"
import ClayButton from "@clayui/button"

export default function UpdateBlog() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [id, setId] = useState('');


    const UPDATEKNOWLEDGE = () => {
        knowledgeUpdate(id, title, body)
    }

    return (
        <>
            <hr />

            <h2>UPDATE:</h2> <br />

            <ClayForm>
                <ClayForm.Group>
                    <label htmlFor='id'>KNOWLEDGE ID</label>
                    <ClayInput 
                    id='id'
                    onChange={(event) => setId(event.target.value)}
                    placeholder='id'
                    type='text'
                    value={id}
                    />
                </ClayForm.Group>
                <ClayForm.Group>
                    <label htmlFor='title'>TITLE</label>
                    <ClayInput 
                    id='title'
                    onChange={(event) => setTitle(event.target.value)}
                    placeholder='title'
                    type='text'
                    value={title}
                    />
                </ClayForm.Group>
                <ClayForm.Group>
                    <label htmlFor='body'>BODY</label>
                    <ClayInput 
                    id='body'
                    onChange={(event) => setBody(event.target.value)}
                    placeholder='body'
                    type='text'
                    value={body}
                    />
                </ClayForm.Group>
            </ClayForm>

            <ClayButton displayType='primary' onClick={() => UPDATEKNOWLEDGE()}>Update article</ClayButton> 
            
            <hr />
        </>
    );
}