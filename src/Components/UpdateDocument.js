import React, { useState } from 'react'
import { updateDocument } from '../Request/Request'
import { ClayInput } from "@clayui/form"
import ClayButton from "@clayui/button"

export default function UpdateDocument() {

    const [Id, setId] = useState('')

    const UPDATEDOCUMENT = () => {
        updateDocument(Id)
    }

    return (
        <>
             <h2>UPDATE</h2> 
             <hr />
			<input 
				type = 'file' 
				id = 'documentFile'/>

            <ClayInput
                id = 'id'
                onChange = {(event) => setId(event.target.value)}
                placeholder = 'id'
                type = 'text'
                value = {Id}
            />

            <ClayButton onClick = { () => UPDATEDOCUMENT() } displayType = 'secondary'> UPDATE DOC</ClayButton>
            <hr/>

        </>
    )
}