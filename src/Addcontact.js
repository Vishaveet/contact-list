import axios from "axios";
import { useState } from "react";

function AddContact(props) {
    console.log(props.bol);
    const [name,setName]=useState([]);
    const [phone,setPhone]=useState();
    const [isTure,setIsture]=useState(false);
    function handleClick(){
        setIsture(true)
    }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://jsonplaceholder.typicode.com/users?name=${name}&mobile=${phone}`)
      .then((response) => {
        console.log("res", response.data);
        // setData(response.data);
      })
      .catch((error) => {
        console.log("error");
      });
    console.log("nice");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3>Name</h3>
        <input type="text" placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/>
        <h3>Phone</h3>
        <input type="number" placeholder="Phone" onChange={(e)=>{setPhone(e.target.value)}}></input>
        <br />
        <br />
        <button className="add-Con" onClick={handleClick}>Add</button>
      </form>
      <br/>
      <br/>
      <br/>
      {isTure ? <h3 className="success">Contact Add Successsfully</h3> : "" }
      {isTure ? <button className="btn" 
      onClick={props.bol}>back</button> : ""}
    </>
  );
}
export default AddContact;
