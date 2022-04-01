import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllFurniture = () => {
    return axios(`${apiUrl}/furniture`)
}

// show function
export const getOneFurniture = (furnitureId) => {
    return axios(`${apiUrl}/furniture/${furnitureId}`)
}

// POST -> create function
export const createFurniture = (newFurniture) => {
    console.log('this is newFurniture', newFurniture)
    return axios({
        url: `${apiUrl}/`,
        method: 'POST',
        data: { furniture: updatedFurniture }
    })
}

// // PATCH -> update function
export const updateFurniture = (updatedFurniture) => {
    console.log('this is newFurniture', newFurniture)
    return axios({
        url: `${apiUrl}/furniture/${updatedFurniture.id}`,
        method: 'PATCH',
        data: { furniture: updatedFurniture }
    })
}

// DELETE -> remove function
export const removeFurniture = (furnitureId) => {
    return axios({
        url: `${apiUrl}/furniture/${furnitureId}`,
        method: 'DELETE',
    })
}
