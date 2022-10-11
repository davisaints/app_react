import React, { useState } from 'react'
import {postArticle} from '../Request/Request'
import ClayForm, { ClayInput } from "@clayui/form"
import ClayButton from "@clayui/button"

export default function KnowledgePost() {

    const [title, setTitle] = useState('');
    const [body, setBody]  = useState('');

    function KNOWPOST() {
        postArticle(title, body)
    }


    return (
        <>
            <h1>KNOWLEDGEBASE</h1> <hr/>

            <h2>POST</h2>   

            <ClayForm>
                <ClayForm.Group>    
                    <label htmlFor='basicInputText'>Title</label>
                    <ClayInput 
                        placeholder= 'Name'
                        type= 'text'
                        value = {title}
                        onChange={(event) => setTitle(event.target.value)}
                    ></ClayInput>
                </ClayForm.Group>
                <ClayForm.Group>
                <label htmlFor='basicInputText'>Body</label> <br />
                    <textarea 
                        className= 'Body'
                        type= 'Description'
                        value = {body}
                        onChange={(event) => setBody(event.target.value)}
                    ></textarea>
                </ClayForm.Group>

                <ClayButton onClick={() => KNOWPOST()} displayType = 'primary'>Post article</ClayButton>
            </ClayForm>
        </>
    );

}