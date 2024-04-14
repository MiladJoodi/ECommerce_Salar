import axios from "axios";

const client = axios.create({
    // baseURL: "https://mocki.io/"
    baseURL: "http://localhost:8001"
})

// Get  All Data
export async function getProducts (){
    const data = await client("/products")
    return data.data;
}

// Get Single Product
export async function getProduct(id: string | number){
    const {data} = await client(`/products/${id}`)

    return data;
}