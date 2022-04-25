
import axios from "axios"
import { useState } from "react"
import "./home.css"
export const Create =()=>{
  // const [petData, setPetData]= useState([])
  const [pet, setPet] = useState({
    name : "",
    city : "",
    Address : "",
    capacity : "",
    cost : "",
    selectVerify : "",
    rating : "",
    petType : "",
    petSize : "",
    superviser : "",
    sleep_place : "",
    potty : "",
    walks : "",
    homeType : "",
    outdoor_size: "",
    transport : "",
  })

  const handleChange = (e)=>{
      const {className, value} = e.target;
      setPet({
          ...pet,
          [className] : value,
      })
  }
  const handleSubmit = (e)=>{
      e.preventDefault();
        axios.post("http://localhost:1342/pets", pet).then((res) =>{
          alert("Pet data is created");
          console.log(res);
        })
  }
  
  return (
    <>
              <h3>Create Page</h3>
              <form onSubmit={handleSubmit} className="create_div">
            
                <label>Enter Pat Name: </label>
            
                <input type="text" className="name" placeholder="enter name" value ={pet.name}  onChange={handleChange} />
                <br />
                <label >Enter City: </label>
            
                <input type="text" className="city" placeholder="enter city" value ={pet.city} onChange={handleChange} />
                  <br />
                  <label >Enter Address: </label>
              
                  <input type="text" className="address" placeholder="enter address" value ={pet.address} onChange={handleChange} />
                  <br />
                  <label >Enter Capacity: </label>
              
                  <input type="text" className="capacity" placeholder="enter capacity" value ={pet.capacity} onChange={handleChange} />
                  <br />
                  <label >Enter Cost: </label>
              
                  <input type="number" className="cost" placeholder="enter cost" value ={pet.cost} onChange={handleChange} />
                  <br />
                  <label >Verified: </label>
                  <select name="" className="selectVerify" value ={pet.selectVerify} onChange={handleChange} >
              
                    <option value="">---Select---</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  <br />
                  <label >Give Rating: </label>
              
                  <input type="text" className="rating" placeholder="enter rating" value ={pet.rating} onChange={handleChange} />
                  <br />
              
                  <label>Accepted Pet type: </label>
              
                  <select name="" className="petType" value={pet.petType} onChange={handleChange}>
                    <br />
                    <option value="">--Selec--</option>
                    <option value="Dog">Dog</option>
                    <option value="Cats">Cats</option>
                    <option value="Rabbits">Rabbits</option>
                    <option value="Horses">Horse</option>
                  </select><br />
                  <label>Accepted Pet size</label>
                  <select name="" className="petSize" value = {pet.petSize} onChange={handleChange}>
                    <br />
                    <option value="">--Select--</option>
                    <option value="1-5kg">1-5kg</option>
                    <option value="5-10kg">5-10kg</option>
                    <option value="10-20kg">10-20kg</option>
                    <option value="20-40kg">20-40kg</option>
                    <option value="40+kg">40+kg</option>
                  </select>
                  <br />
                  <label>Level of adult supervision: </label>
              
                  <select name="" className="superviser" value={pet.superviser}onChange={handleChange}>
                    <br />
                    <option value="yes">---Select---</option>
                    <option value="Pets will never be left unattended">
                      Pets will never be left unattended
                    </option>
                    <option value="Free roam of the house">Free roam of the house</option>
                  </select><br />
                  <label>Place of sleep: </label>
                  <select name="" className="sleep_place" value={pet.sleep_place} onChange={handleChange}>
                    <br />
                    <option value="">--Sleep--</option>
                    <option value="Wherever they want">Wherever they want</option>
                    <option value="Need some specific place">Need some specific place</option>
                  </select>
                  <br />
                  <label>Number of potty per day: </label>
                  <input type="number" className="potty" min={1} max={5} value ={pet.potty} onChange={handleChange} />
                  <br />
                  <label>Number of Walks per day: </label>
                  <input type="number" className="walks" min={1} max={5}  value ={pet.walks} onChange={handleChange} />
                  <br />
                  <label>Type of Home : </label>
              
                  <select name="" className="homeType"value ={pet.homeType} onChange={handleChange}>
              
                      <option value="">--select--</option>
                      <option value="">House</option>
                      <option value="">Apartment</option>
                  </select>
                  <br />
                  <select name="" className="outdoor_size" value ={pet.outdoor_size} onChange={handleChange}>
              
                      <option value="">--select--</option>
                      <option value="small">small</option>
                      <option value="medium">medium</option>
                      <option value="large">large</option>
                  </select>
                  <br />
                  <label>Emergency transport  : </label>
                  <select name="" className="transport" value ={pet.transport} onChange={handleChange}>
              
                      <option value="">--select--</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
              
                  </select>
                  <br/>
                  <input type="submit" value={"Submit"}  />
                </form>
            </>
      )
  }