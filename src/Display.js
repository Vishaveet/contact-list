import axios from "axios";
import { useState } from "react";

function Display(props) {

  let detail = props.name;
  const [isbol, setIsbol] = useState(true);
  const [name, setName] = useState(props.name);
  const handleChange = () => {
    setIsbol((prev) => (prev = !prev));
  };

  const handleEdit = () => {
    axios
      .put(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        // console.log("res", response.data);
        // setData(response.data);
      })
      .catch((error) => {
        // console.log("error");
      });
    let newname=prompt("Enter a new name",name);
    setName(newname);
  };

  const handleDelete = () => {
   alert(`Delete ${props.name}`);
   axios
      .delete("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log("res", response.data);
      })
      .catch((error) => {
        // console.log("error");
      });

  };
  return (
    <>
      
        <div className="conatct-box" onClick={handleChange}>
          <img
            className="profile"
            alt="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrY_W6KrP-a7AEgV1EGganXGC4LBZ44E4d3WwyoeA-sw&s"
          />

          <h3>{name}</h3>
          {isbol ? (
            ""
          ) : (
            <img
              onClick={handleEdit}
              className="edit"
              alt="img"
              src="https://cdn-icons-png.flaticon.com/128/2356/2356780.png"
            />
          )}
          {isbol ? (
            ""
          ) : (
            <img
              onClick={handleDelete}
              className="delete"
              alt="img"
              src="https://cdn-icons-png.flaticon.com/128/3096/3096687.png"
            />
          )}
        </div>
       
    </>
  );
}
export default Display;
