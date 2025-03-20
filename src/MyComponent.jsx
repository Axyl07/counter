import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const updateName = () => {
    setName("SpongEBoby");
  };
  const [age, setAge] = useState(0);
  const incrementAge = () => {
    setAge(age + 1);
  };
  const [isEmployed, setEmployedStatus] = useState(false);
  const changeEmployedStatus = () => {
    setEmployedStatus(!isEmployed);
  };
  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>
      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increment Age</button>
      <p>Is Employed? {isEmployed ? "Yes" : "Nahh"}</p>
      <button onClick={changeEmployedStatus}>Change Employed Status</button>
    </div>
  );
}
export default MyComponent;
