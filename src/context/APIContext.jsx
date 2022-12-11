import {  createContext, useEffect, useState } from 'react'
import { API } from '../utils/api'

const APIContext = createContext()

const APIProvider = ({children}) => {

    const [data, setData] = useState(undefined)
    const [shopCart, setShopCart] = useState([])

    const getAPI = async () => {
        try {
            const res = await fetch(`${API}`)
            const data = await res.json()
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAPI()
    }, [])

    const [itemSelect, setItemSelect] = useState({
        size: "",
        color: "",
        title: "",
        price: "",
        compare_price: "",
        id: ""
    })

    if(!data) return null

    return (
        <APIContext.Provider value={{
            data,
            setData,
            itemSelect,
            setItemSelect,
            shopCart,
            setShopCart
        }}>
            {children}
        </APIContext.Provider>
    )
}

export { APIContext, APIProvider }