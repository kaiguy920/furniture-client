import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'

import Layout from './../shared/Layout'
import FurnitureForm from '../shared/FurnitureForm'

const EditFurniture = (props) => {

    const [furniture, setFuniture] = useState({ type: '', roomLocation: '', material: '', accomodates: '' })
    const [updated, setUpdated] = useState(false)

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

export default EditFurniture
