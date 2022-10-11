import React, { useEffect, useState } from 'react'
import { getBlog } from '../Request/Request'
import ClayTable from '@clayui/table'


export default function GetBlog() {
    const [postBlog01, setPostBlog01] = useState([])

    useEffect(() => {
        getBlog().then((res) => setPostBlog01(res.items))
    }, [postBlog01])

    return (
        <>
            <br />

            <h2>GET:</h2> <br />

            <ClayTable>
                <ClayTable.Head>
                    <ClayTable.Cell headingCell>{'id'}</ClayTable.Cell>
                    <ClayTable.Cell headingCell>{'headline'}</ClayTable.Cell>
                    <ClayTable.Cell headingCell>{'articleBody'}</ClayTable.Cell>
                </ClayTable.Head>

                <ClayTable.Body>
                    {postBlog01 ?
                        postBlog01.map(pl => (
                            <ClayTable.Row>
                                <ClayTable.Cell>{pl.id}</ClayTable.Cell>
                                <ClayTable.Cell>{pl.headline}</ClayTable.Cell>
                                <ClayTable.Cell>{pl.articleBody}</ClayTable.Cell>
                            </ClayTable.Row>
                        )) : ''}
                </ClayTable.Body>
            </ClayTable>
        </>
    );
<<<<<<< HEAD
}	
=======
}	
>>>>>>> 2d859dd (Clay, React and REST)
