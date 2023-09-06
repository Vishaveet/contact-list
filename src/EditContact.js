function EditContact(props) {
    console.log('ki',props);
    function handleSubmit(e){
        e.preventDefault();
    }
  return (
    <>
     {props.item}
      {/* <div className="edit-box">
        <form onSubmit={handleSubmit}>
          <h3>Name</h3>
          <input type="text" placeholder="Name" />
          <h3>Phone</h3>
          <input type="number" placeholder="Phone"></input>
          <br />
          <br />
          <button>Edit</button>
        </form>
      </div> */}
    </>
  );
}
export default EditContact;
