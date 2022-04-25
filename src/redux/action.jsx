

export const GET_DATA = "GET_DATA"
export const FILTER_DATA = "FILTER_DATA"

export const getData = (payload)=>({
    type: GET_DATA,
    payload
})

export const filterData = (payload)=>({
    type: FILTER_DATA,
    payload
})