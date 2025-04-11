import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    Comments: "",
    isVisible: true,
    mode: "",
    favCar:""
  });

  function changeHandler(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event){
    event.preventDefault();
    alert("Form submitted successfully!");
    console.log(formData)
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="first name..."
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="last name..."
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter ur email..."
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />
        <br />
        <br />
        <textarea
          placeholder="Enter ur comments here..."
          onChange={changeHandler}
          name="Comments"
          value={formData.Comments}
        />
        <br />
        <br />
        <input
          type="checkbox"
          onChange={changeHandler}
          checked={formData.isVisible}
          id="isVisible"
          name="isVisible"
        />
        <label htmlFor="isVisible">Am I Visible?</label>
        <br />
        <fieldset>
          <legend>MODE</legend>
          <br />
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            id="online-mode"
            value="online-mode"
            checked={formData.mode === "online-mode"}
          />
          <label htmlFor="online-mode">Online Mode</label>
          <br />
          <br />
          <input
            type="radio"
            onChange={changeHandler}
            name="mode"
            id="offline-mode"
            value="offline-mode"
            checked={formData.mode === "offline-mode"}
          />
          <label htmlFor="online-mode">Offline Mode</label>
          <br/>
        </fieldset>
        <br/>
        <br/>
        <label htmlFor="favCar">Select ur Fav Car: </label>
        <select
        name="favCar"
        id="favCar"
        onChange={changeHandler}
        value={formData.favCar}
        >
          <option value="Toyota">Toyota</option>
          <option value="Honda">Honda</option>
          <option value="Ford">Ford</option>


        </select>

        <br/>
        <br/>

        <button>Submit</button>




      </form>
    </div>
  );
}

export default App;
