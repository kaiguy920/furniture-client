import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllFurniture = () => {
    return axios(`${apiUrl}/furniture`)
}