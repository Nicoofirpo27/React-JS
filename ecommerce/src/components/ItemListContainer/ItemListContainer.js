import { useState, useEffect } from 'react'  4.2k (gzipped: 1.8k)
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

import { useParams } from 'react-router-dom'  1.7k (gzipped: 809)

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState ([])

    const { categoryID } = useParams()

    useEffect ( () => {
       const asyncFunc = categoryID ? getProductsByCategory : getProducts

       asyncFunc(categoryID)
            .then(response => { 
                setProducts(response)
            }) 
            .catch(error => {
                console.error(error)
            })
    }, [categoryID])
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer