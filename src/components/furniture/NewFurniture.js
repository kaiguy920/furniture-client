import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { createFurniture } from '../../api/furniture'
import FurnitureForm from '../shared/FurnitureForm'

import Layout from './../shared/Layout'
import BookForm from './../shared/BookForm'



// inherit from the component class
const CreateFurniture = () => {

    const [furniture, setFuniture] = useState({ type: '', roomLocation: '', material: '', accomodates: '' })
    const [createdId, setCreatedId] = useState(null)

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
        <Layout>
            <FurnitureForm
                furniture={furniture}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
            />
        </Layout>
    )

}

export default CreateFurniture
