import React, { useEffect, useState } from 'react'
import { getGeneral } from '../Request/Request'
import ClayTable from '@clayui/table'

export default function GetKnowledge() {
	const [ article, setArticle ] = useState([])

	useEffect(() => {
		getGeneral('knowledge-base-articles').then((res) => setArticle(res.items))
	}, [])

    return (
        <>

        <hr />
        <h2>GET</h2>
           
            <ClayTable>
                <ClayTable.Head>
                    <ClayTable.Row>
                        <ClayTable.Cell headingCell>{'id'}</ClayTable.Cell>
                        <ClayTable.Cell headingCell>{'title'}</ClayTable.Cell>
                        <ClayTable.Cell headingCell>{'body'}</ClayTable.Cell>
                    </ClayTable.Row>
                </ClayTable.Head>

                <ClayTable.Body>
                {article
                 ? article.map(kb => (
                    <ClayTable.Row key = { kb.id }>
                        <ClayTable.Cell>{ kb.id }</ClayTable.Cell>
                        <ClayTable.Cell>{ kb.title }</ClayTable.Cell>
                        <ClayTable.Cell>{ kb.articleBody }</ClayTable.Cell>
                    </ClayTable.Row>
                )):''}
                </ClayTable.Body>
            </ClayTable>
           
        </>
     )
}	