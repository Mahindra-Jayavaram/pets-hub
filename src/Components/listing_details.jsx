import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import axios from "axios"
import { useParams } from "react-router-dom"
import { getData } from "../redux/action";

import "./home.css"
export const Details =()=>{
     const {id} =useParams()
    const [petData, setPetData] = useState([]);

    useEffect(() =>{
        getData();
    },[]);

    const getData = () =>{
        axios.get(`http://localhost:1342/pets/${id}`).then((res) =>{
            setPetData([res.data]);
        })
    }
    return(
         <> 
         <h1>Pet details page</h1>
            {petData.map((e)=>( 
         <div className="info_div">
            <h2>Name: {e.name}</h2>
             <p>City :{e.city}</p>
            <p> Address :{e.address}</p>
             <p>Capacity :{e.capacity}</p>
             <p>Cost:{e.cost}</p>
             <p>Verified:{e.selectVerify}</p>
             <p>Ratings :{e.rating}</p>
             <p>Accepted_Pet_type :{e.Accepted_Pet_type}</p>
             <p>Accepted_Pet_size :{e.Accepted_Pet_size}</p>
             <p>adult_supervision :{e.adult_supervision}</p>
             <p>sleep_place :{e.sleep_place}</p>
             <p>Potty break :{e.potty}</p>
             <p>No. of walks needed in a day :{e.walks} </p>
             <p>type_of_home :{e.type_of_home}</p>
             <p>outdoor_size :{e.outdoor_size}</p>
             <p>transport needed :{e.transport}</p>
         </div>
             ))}
         </>
    )
}