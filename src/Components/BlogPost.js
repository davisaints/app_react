import React, { useState } from 'react'
import { postBlog } from '../Request/Request'
import ClayForm, { ClayInput } from "@clayui/form"
import ClayButton from "@clayui/button"

export default function BlogPost() {
    const [articleBody, setArticleBody] = useState('');
    const [headline, setHeadline] = useState('');

    function POST() {
        postBlog(headline, articleBody)
            .then(() => {
                setHeadline('');
                setArticleBody('');
            })
    }

    return (
        <>
            <h1>BLOGS</h1> <br />

            <h2>POST</h2> <br />

            <ClayForm>
                <ClayForm.Group>
                    <label htmlFor='basicInputText'>HEADLINE</label>
                    <ClayInput
                        id='headline'
                        onChange={(event) => setHeadline(event.target.value)}
                        placeholder='headline'
                        type='text'
                        value={headline}
                    />
                </ClayForm.Group>
                <ClayForm.Group>
                    <label htmlFor='basicInputText'>ARTICLE BODY</label>
                    <ClayInput
                        id='articleBody'
                        onChange={(event) => setArticleBody(event.target.value)}
                        placeholder='articleBody'
                        type='text'
                        value={articleBody}
                    />
                </ClayForm.Group>
            </ClayForm> 

            <ClayButton displayType="primary" onClick={() => POST()}>Add a blog</ClayButton> <br />


        </>

    );
}