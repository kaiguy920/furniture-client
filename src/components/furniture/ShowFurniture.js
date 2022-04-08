import React, { useState, useEffect } from 'react'
import { getOneFurniture, removeFurniture } from '../../api/furniture'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const ShowFurniture = (props) => {
    const [furniture, setFurniture] = useState(null)
    const [updated] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()
    console.log('id in showFurniture', id)
    console.log('props in showFurniture', props)
    // empty dependency array in useEffect to act like component did mount
    useEffect(() => {
        console.log("use effect ran!");
        getOneFurniture(id)
            .then(res => {
                setFurniture(res.data.furniture)
            })
            .catch(console.error)
    }, [])

    const removeTheFurniture = () => {
        removeFurniture(furniture._id)

            .then(() => { navigate(`/`) })
            .catch(console.error)
    }


    return (
        <>

            <h2>About this {furniture?.type}</h2>
            <h4>Room location: {furniture?.roomLocation}</h4>
            <h4>Made out of: {furniture?.material}</h4>
            <h4>Accomodates: {furniture?.accomodates}</h4>

            <Link to={`/furniture/${id}/edit`}>Update Furniture!</Link>


            <Button onClick={() => removeTheFurniture()} variant="danger">
                Delete {furniture?.type}
            </Button>

        </>
    )
}

export default ShowFurniture