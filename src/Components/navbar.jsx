import { Link } from "react-router-dom";


export const Navbar = () => {
  return (
    <>
      <div className="navbar" style={{justifyContent:"space-around",display:"flex",background:"pink",border:"1px solid black",padding:"20px"}}>
        <button className="home"  >
          <Link to="/" >{"home"}</Link>
        </button>
        <button className="create" >
        <Link to="/listing/create" > {"Create"}</Link>
        </button>
       
     
      </div>
    </>
  );
};