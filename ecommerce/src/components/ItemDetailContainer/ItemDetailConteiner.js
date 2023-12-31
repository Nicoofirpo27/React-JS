import '.ItemDetailContainer.css'
import { useState, useEffect } from 'react'  4.2k (gzipped: 1.8k)
import { getProductsById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom' 1.7k (gzipped: 809)

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId }= useParams()

    useEffect (() => {
        getProductsById(itemId)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })

    }, [itemId])

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer