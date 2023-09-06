import { useEffect, useState } from "react";
import axios from "axios";

import AddContact from "./Addcontact";
import Display from "./Display";

function App() {
  const [data, setData] = useState([]);
  const [isture, setIsture] = useState();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log("res", response.data);
        setData(response.data);
        //Hi
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
          {isture ? <AddContact  bol={handleChange} /> : ""}
        </div>
      </div>
    </>
  );
}

export default App;
