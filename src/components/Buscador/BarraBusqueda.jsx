import React, { useState } from "react";

const BarraBusqueda = () => {
  const [search, setSearch] = useState("");
  const users = [
    { uid: 1, name: "Cristian", age: 28 },
    { uid: 2, name: "Gabriel", age: 25 },
    { uid: 3, name: "Diego", age: 20 },
    { uid: 4, name: "Alejandro", age: 22 },
    { uid: 5, name: "David", age: 28 },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  let filteredUsers = [];
  if (!search) {
    filteredUsers = users;
  } else {
    filteredUsers = users.filter((dato) =>
      dato.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log(filteredUsers)
  }
  return (
    <div>
      <label htmlFor="search">Buscar: </label>
      <input
        type="search"
        name="Isearch"
        id="search"
        value={search}
        onChange={handleSearch}
      />
      <ul>
        {filteredUsers.map((user) => <li key={user.uid}>{user.name}</li>)}
      </ul>
    </div>
  );
};

export default BarraBusqueda;
