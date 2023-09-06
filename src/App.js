import { useEffect, useState } from "react";
import axios from "axios";
import "./app.css";
import AddContact from "./Addcontact";
import EditContact from "./EditContact";
import Display from "./Display";
import DeleteContact from "./DeleteContact";

function App() {
  const [data, setData] = useState([]);
  const [isture, setIsture] = useState();
  const [isHome, setIsHome] = useState(false);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("res", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);
  const addContact = () => {
    setIsture((prev) => (prev = !prev));
  };
  const handleChange = () => {
    setIsture((prev) => (prev = !prev));
  };
  return (
    <>
      <div className="container">
        <div className={isture ? "hide-box" : "box"}>
          <h3 className="heading">Contacts</h3>
          <div className="header">
            <div className="input-box">
              <input type="text" placeholder="search" />
              <img
                alt="img"
                src="https://cdn-icons-png.flaticon.com/128/54/54481.png"
              />
            </div>
            <img
              onClick={addContact}
              alt="icon"
              src="https://cdn-icons-png.flaticon.com/128/748/748113.png"
            />
          </div>
          <div className="list">
            {data.length === 0
              ? ""
              : data.map((item, index) => <Display name={item.name} />)}
          </div>
        </div>
        <div className={isture ? "new-box" : ""}>
          {isture ? <AddContact home={isHome} bol={handleChange} /> : ""}
        </div>
      </div>
    </>
  );
}

export default App;

{
  /* <div className="conatct-box">
              <img
                alt="img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrY_W6KrP-a7AEgV1EGganXGC4LBZ44E4d3WwyoeA-sw&s"
              />
              <h3>Raj </h3>
            </div> */
}

// {(!isture && isEdit) ? <EditContact item={item.name}/>: ""}
