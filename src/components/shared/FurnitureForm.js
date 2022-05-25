import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FurnitureForm = (props) => {
    const { furniture, handleChange, handleSubmit, cancelPath } = props

    return (
        <Container className="justify-content-center">
            <h3>Create Furniture</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Type</Form.Label>
                <Form.Control
                    placeholder="what type of furniture is it?"
                    value={furniture.type}
                    name='type'
                    onChange={handleChange}
                />
                <Form.Label>Room Location</Form.Label>
                <Form.Control
                    placeholder="what room would this furniture go?"
                    value={furniture.roomLocation}
                    name='roomlocation'
                    onChange={handleChange}
                />
                <Form.Label>Material</Form.Label>
                <Form.Control
                    placeholder="what is made out of?"
                    value={furniture.material}
                    name='material'
                    onChange={handleChange}
                />
                <Form.Label>Accomodates</Form.Label>
                <Form.Control
                    placeholder="how many people can it accomodate?"
                    value={furniture.accomodates}
                    name='accomodates'
                    type='number'
                    onChange={handleChange}
                />
                <div class='links'>

                    <Button type='submit'>Submit</Button>

                    <Link to={cancelPath}>
                        <Button variant="danger">Cancel</Button>
                    </Link>

                </div>

            </Form>
        </Container >
    )
}

export default FurnitureForm