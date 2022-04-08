import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { updateFurniture } from '../../../src/api/furniture'

import FurnitureForm from '../shared/FurnitureForm'

const EditFurniture = (props) => {
    const { updateFurniture } = props
    const [furniture, setFurniture] = useState({ type: '', roomLocation: '', material: '', accomodates: '' })
    const [updated, setUpdated] = useState(false)


    const handleChange = (e) => {
        e.persist()
        setFurniture((prevFurniture) => {
            const name = e.target.name
            const value = e.target.value
            const updatedValue = { [name]: value }


            console.log('prevFurniture', prevFurniture)
            console.log('updatedValue', updatedValue)

            // const editedFurniture = Object.assign({}, prevFurniture, updatedValue)

            return { ...prevFurniture, ...updatedValue }
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()
        updateFurniture(furniture)
            .then(() => setUpdated(true))
            .catch(console.error)

    }

    // if (updated) {
    //     return <Redirect to={`/furniture/${props.match.params.id}`} />
    // }
    return (

        <FurnitureForm
            furniture={furniture}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
        />

    )
}

export default EditFurniture
