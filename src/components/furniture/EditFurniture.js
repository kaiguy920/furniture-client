import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { updateFurniture, getOneFurniture } from '../../../src/api/furniture'

import FurnitureForm from '../shared/FurnitureForm'

const EditFurniture = (props) => {
    // const { updateFurniture } = props
    const { id } = useParams()
    const [furniture, setFurniture] = useState({ type: '', roomLocation: '', material: '', accomodates: '' })
    const [updated, setUpdated] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        getOneFurniture(id)
            .then(res => setFurniture(res.data.furniture))
            .catch(console.error)
    }, [])

    const handleChange = (e) => {
        e.persist()
        setFurniture((prevFurniture) => {
            const name = e.target.name
            const value = e.target.value
            const updatedValue = { [name]: value }


            console.log('prevFurniture', prevFurniture)
            console.log('updatedValue', updatedValue)

            const editedFurniture = Object.assign({}, prevFurniture, updatedValue)

            return editedFurniture
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()
        updateFurniture(furniture)
            .then(() => setUpdated(true))
            .then(() => navigate('/furniture'))
            .catch(console.error)

    }

    return (

        <FurnitureForm
            furniture={furniture}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            cancelPath={`/furniture/${id}`}
        />

    )
}

export default EditFurniture
