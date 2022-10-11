import React from 'react'
import ClayButton from "@clayui/button"
import { postDocument } from '../Request/Request'

export default function PostDocument() {
   
    return (

        <>
            <h1>DOCUMENTS</h1> 
            <hr />
            <h2>POST</h2>
            <hr />
            
			<input 
				type = 'file' 
				id = 'documentFile'/>
			<ClayButton onClick = {() => postDocument() } displayType = 'secondary'>Post a document</ClayButton>
		<hr/>

        </>
    )
}

