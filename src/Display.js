import { useState } from "react";

function Display(props) {
  let detail = props.name;
  console.log(props);
  const [data, setData] = useState(detail);
  const [isbol, setIsbol] = useState(true);
  const handleChange = () => {
    setIsbol((prev) => (prev = !prev));
  };
  const handleEdit = () => {
    console.log("edit");
    setData("Edit");
  };
  const handleDelete = () => {
    setData("Del");
    alert('delete')
    console.log("delete");
  };
  return (
    <>
      <div className="conatct-box" onClick={handleChange}>
        {/* {data} */}
        <img
          className="profile"
          alt="img"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrY_W6KrP-a7AEgV1EGganXGC4LBZ44E4d3WwyoeA-sw&s"
        />

        <h3>{props.name}</h3>
        {isbol ? (
          ""
        ) : (
          <img
            onClick={handleEdit}
            className="edit"
            alt="img"
            // onClick={}
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
