import React,{ useState }from 'react';
import './Contact.css';
// import Table from "./Table";
const Contact = () => {

  // const [Contacts, setContacts]=useState();
const [addFormdata, setAddFormdata]=useState({
  firstName:'',
  lastName:''
}
)

// const [firstName, setFirstName] = useState("");
// const [lastName, setLastName] = useState("");
// console.log(firstName);

const handleSubmit = (event) => {
  event.preventDefault();
  // alert(`The name you entered was:${addFormdata}`);
}

return (
  <>
  <form >
  <h1>NEW BUSINESS</h1>
      <input
        type="text"
        name="firstName"
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
        placeholder="First name..."
        required="required"
      />

      <input
        value={lastName}
        onChange={e => setLastName(e.target.value)}
        placeholder="Last name..."     
        type="text"
        name="lastName"
        required="required"
      />
	  <div>  
	   <button type="submit">{handleSubmit}Submit</button>
	   </div>
     </form> 
     
     <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {/* {addFormdata.map((name)=> (
            <tr>
            <td>{name.firstName}</td>
            <td>{name.lastName}</td>
          </tr>))} */}
        </tbody>
      </table>
     </div>
  </>

)
};
     
export default Contact;
