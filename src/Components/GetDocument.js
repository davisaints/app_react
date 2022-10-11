import React, { useState, useEffect } from 'react'
import { getGeneral } from '../Request/Request'
import ClayTable from '@clayui/table'

export default function GetDocument() {

	const [ docDoc, setdocDoc ] = useState([])

    useEffect(() => {
		getGeneral('documents').then((res) => setdocDoc(res.items))
	}, [docDoc])

    return (
        <>
            <h2>GET</h2> 
            <ClayTable>
                <ClayTable.Head>
                    <ClayTable.Row>
                        <ClayTable.Cell headingCell>{'id'}</ClayTable.Cell>
                    </ClayTable.Row>
                </ClayTable.Head>

                <ClayTable.Body>
                    {docDoc ?
                        docDoc.map(dd => (
                            <ClayTable.Row>
                                <ClayTable.Cell>{dd.id}</ClayTable.Cell>
                            </ClayTable.Row>
                        )) : ''}
                </ClayTable.Body>
            </ClayTable>
        </>

    );
}