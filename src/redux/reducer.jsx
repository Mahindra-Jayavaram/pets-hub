import { FILTER_DATA, GET_DATA } from "./action";

const initState={
  petData: [],
  filterPetData :[]
};

export const getReducer = (store = initState, { type, payload }) => {
  // console.log(payload)
  switch (type) {
    case GET_DATA:
      return {
        ...store,
        petData: payload,
        filterPetData:payload
      };
    case FILTER_DATA :
      return {...store,filterPetData:[...filterData(store.petData,payload)]}   
    default:
        return store
  }
};

let filterData =(data,value)=>{

 let newData = data.filter((e)=> e.selectVerify === value )

 return newData
}