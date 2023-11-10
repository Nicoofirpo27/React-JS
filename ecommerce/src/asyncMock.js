const products= [
    {
        id: '1',
        name: 'Remera Street',
        price: 9000,
        category: 'remera',
        img: '../img/remeras/1.jpeg',
        stock: 8,
        description: 'remera urbana'
    },
    {id: '2', name: 'Remera Over', price: 9500, category: 'remera', img: '../img/remeras/2.jpeg'},
    {id: '3', name: 'Remera Slim Fit', price: 9200, category: 'remera', img: '../img/remeras/3.jpeg'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productID) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productID))
        }, 500)
    })
}