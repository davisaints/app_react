import React, { useState } from 'react'
import { updateBlog } from '../Request/Request'
import ClayForm, { ClayInput } from "@clayui/form"
import ClayButton from "@clayui/button"

export default function UpdateBlog() {
    const [headline, setHeadline] = useState('');
    const [articleBody, setArticleBody] = useState('');
    const [id, setId] = useState('');


    const UPDATE = () => {
        updateBlog(id, headline, articleBody)
    }


    return (
        <>
            <br />

            <h2>UPDATE:</h2> <br />

            <ClayForm>
                <ClayForm.Group>
                    <label htmlFor='id'>BLOG ID</label>
                    <ClayInput 
                    id='id'
                    onChange={(event) => setId(event.target.value)}
                    placeholder='id'
                    type='text'
                    value={id}
                    />
                </ClayForm.Group>
                <ClayForm.Group>
                    <label htmlFor='headline'>HEADLINE</label>
                    <ClayInput 
                    id='headline'
                    onChange={(event) => setHeadline(event.target.value)}
                    placeholder='headline'
                    type='text'
                    value={headline}
                    />
                </ClayForm.Group>
                <ClayForm.Group>
                    <label htmlFor='articleBody'>ARTICLE BODY</label>
                    <ClayInput 
                    id='articleBody'
                    onChange={(event) => setArticleBody(event.target.value)}
                    placeholder='articleBody'
                    type='text'
                    value={articleBody}
                    />
                </ClayForm.Group>
            </ClayForm>

            <ClayButton displayType='primary' onClick={() => UPDATE()}>Update blog</ClayButton> <br />
        </>
    );
}