import axios from "./axios"

export const getOrdenRequest = ()=> axios.get('/order')

export const getOrdenIdRequest =(Id)=> axios.get(`/order/${Id}`) 


