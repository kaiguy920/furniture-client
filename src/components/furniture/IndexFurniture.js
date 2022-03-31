import React, { useState, useEffect } from 'react'
import { getAllFurniture } from '../../api/furniture'

const IndexFurniture = (props) => {
    const [furniture, setFurniture] = useState(null)

    useEffect(() => {
        getAllFurniture()
            .then(res => {
                setFurniture(res.data.furniture)
            })
            .catch(console.error)
    }, [])

    if (!furniture) {
        return <p>loading...</p>
    } else if (furniture.length === 0) {
        return <p>no furniture yet, go add some</p>
    }

    let furnitureJsx

    if (furniture.length > 0) {
        furnitureJsx = furniture.map(furniture => (
            <li key={furniture.id}>
                {furniture.type}
            </li>
        ))
    }

    return (
        <>
            <h3>All the furniture</h3>
            <ul>
                {furnitureJsx}
            </ul>
        </>
    )
}

export default IndexFurniture