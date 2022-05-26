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

            .then(() => { navigate(`/furniture`) })
            .catch(console.error)
    }


    return (
        <>
            <div class='container'>
                <div class='about'>
                    <h2>About this {furniture?.type}</h2>
                    <h4>Room location: {furniture?.roomLocation}</h4>
                    <h4>Made out of: {furniture?.material}</h4>
                    <h4>Accomodates: {furniture?.accomodates}</h4>
                </div>
                <div class='links'>
                    <Link to={`/furniture/${id}/edit`} class='linky'>Update Furniture!</Link>

                    <Button class='linky' onClick={() => removeTheFurniture()} variant="danger">
                        Delete {furniture?.type}
                    </Button>

                    <a class="btn btn-primary linky" href="/furniture">Back</a>
                </div>
            </div>
        </>
    )
}

export default ShowFurniture