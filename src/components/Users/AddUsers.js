import React from 'react'

function AddUsers(props) {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

  return (
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        <input type="text" name="username"/>
        <label htmlFor="age">Age(Years)</label>
        <input type="number" name="age"/>
        <button type="submit">Add User</button>
    </form>
  );
}

export default AddUsers