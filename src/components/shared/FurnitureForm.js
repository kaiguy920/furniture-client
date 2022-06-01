import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const FurnitureForm = (props) => {
    // const [furniture, setFurniture] = useState([])
    const { furniture, handleChange, handleSubmit, cancelPath } = props

    return (
        <Container className="justify-content-center">
            <h2>Create Furniture</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Type</Form.Label>
                <Form.Control
                    placeholder="what type of furniture is it?"
                    value={furniture.type}
                    name='type'
                    onChange={handleChange}
                />
                <Form.Label>Room Location</Form.Label>

                <Form.Select aria-label="Room Location" name="roomLocation" value={furniture.roomLocation} onChange={handleChange}>
                    <option>Open this select menu</option>
                    <option value="living room">living room</option>
                    <option value="bedroom">bedroom</option>
                    <option value="kitchen">kitchen</option>
                    <option value="bathroom">bathroom</option>
                    <option value="dining room">dining room</option>
                    <option value="office">office</option>
                    <option value="library">library</option>
                    <option value="spare room">spare room</option>
                </Form.Select>
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