import { useContext } from 'react'
import { APIContext } from '../context/APIContext'

export const useAPI = () => {
    return useContext(APIContext)
}