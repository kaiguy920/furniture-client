import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { createFurniture } from '../../api/furniture'
import FurnitureForm from '../shared/FurnitureForm'

// inherit from the component class
const CreateFurniture = () => {
    const navigate = useNavigate()
    const [furniture, setFurniture] = useState({ type: '', roomLocation: '', material: '', accomodates: '' })

    const handleChange = (event) => {
        event.persist()
        setFurniture((prevFurniture) => {
            const name = event.target.name
            const value = event.target.value
            const updatedValue = { [name]: value }

            console.log('prevFurniture', prevFurniture)
            console.log('updatedValue', updatedValue)

            return { ...prevFurniture, ...updatedValue }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        createFurniture(furniture)
            .then(res => { navigate(`/furniture/${res.data.furniture.id}`) })
            .catch(console.error)
    }

    return (

        <FurnitureForm
            furniture={furniture}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
        />

    )

}

export default CreateFurniture
