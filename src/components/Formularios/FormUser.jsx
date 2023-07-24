import React, { useState } from "react";

const FormUser = () => {
  const [user, setUser] = useState({
    iName: "",
    iLastName: "",
    iAge: "",
  });
  const { iName, iLastName, iAge } = user
  const handleChange = (e) => {
    const {name, value } = e.target;
    setUser({...user, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nameUser">Nombre:</label>
        <input type="text" name="iName" id="nameUser" value={iName} onChange={handleChange} />

        <label htmlFor="lastNameUser">Apellido:</label>
        <input
          type="text"
          name="iLastName"
          id="lastNameUser"
          value={iLastName}
          onChange={handleChange}
        />

        <label htmlFor="ageUser">Edad:</label>
        <input type="text" name="iAge" id="ageUser" value={iAge} onChange={handleChange} />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormUser;
