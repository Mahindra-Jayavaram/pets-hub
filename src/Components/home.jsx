
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterData, getData } from "../redux/action";
import "./home.css";
import { useNavigate } from "react-router-dom";
export const Home = () => {
  const { petData } = useSelector((store) => store.petData);
  const  filterPetData = useSelector((store) => store.petData.filterPetData);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const getPetData = () => {
    axios.get("http://localhost:1342/pets").then((res) => {
      dispatch(getData(res.data));
    });
  };
  useEffect(() => {
    getPetData();
  }, []);
  let counter = 1;

  const handleCostSort = (e)=>{
      const {id,value} = e.target;
      if(id === 'sortByCost' && value==='low'){
          petData.sort((a,b)=>a.cost-b.cost);
           
            dispatch(getData(petData));
      }
      if(id === 'sortByCost' && value==='high'){
          petData.sort((a,b)=>b.cost-a.cost);
          console.log(petData);
          dispatch(getData(petData));

            // getPetData()
      }
      if(id === 'sortByRating' && value==='low'){
        petData.sort((a,b)=>a.rating-b.rating);
         
          dispatch(getData(petData));
    }
    if(id === 'sortByRating' && value==='high'){
        petData.sort((a,b)=>b.rating-a.rating);
        console.log(petData);
        dispatch(getData(petData));

          // getPetData()
    }
    if(id ==="FilterByVerify" ){
         // console.log(value)
        dispatch(filterData(value))
    }
  }

  return (
    <>
      <div id = "buttons" style={
        {
          display : "flex",
          justifyContent : "space-evenly"
        }
      }>
      <select name="" id="FilterByVerify" onChange={handleCostSort} style ={{
        background : "skyblue",
        height : "40px",
        marginTop :"10px",

      }}>
          <option value="">Filter by Verified</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
        <select name="" id="sortByCost" onChange={handleCostSort} style ={{
        background : "skyblue",
        height : "40px",
        marginTop :"10px",

      }}>
          <option value="">sort by cost</option>
          <option value="high">high to low</option>
          <option value="low">low to high</option>
        </select>
        <select name="" id="sortByRating" onChange={handleCostSort} style ={{
        background : "skyblue",
        height : "40px",
        marginTop :"10px",

      }}>
          <option value="">sort by rating</option>
          <option value="high">high to low</option>
          <option value="low">low to high</option>
        </select>
      </div>

      <div className="homeContainer">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>City</th>
              <th>Address</th>
              <th>Capacity</th>
              <th>Cost per day</th>
              <th>Verified</th>
              <th>Rating</th>
            </tr>
          </thead>

          <tbody>
            {petData && filterPetData.map((el) => (
              <tr onClick={() => navigate(`/listing/${el.id}`)} key={el.id}>
                <td>{counter++}</td>
                <td>{el.name}</td>
                <td>{el.city}</td>
                <td>{el.address}</td>
                <td>{el.capacity}</td>
                <td>{el.cost}</td>
                <td>{el.selectVerify}</td>
                <td>{el.rating}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};