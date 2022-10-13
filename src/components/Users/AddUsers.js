import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";

function AddUsers(props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      // +enteredAge is to convert given age into number
      return;
    }
    console.log(`userName is:${enteredUserName}, UserAge is:${enteredAge}`);
    //to set input field reset
    setEnteredUserName("");
    setEnteredAge("");
  };

  const userNameHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const userAgeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">UserName</label>
        {/* //value is used to reset input field  */}
        <input
          type="text"
          name="username"
          value={enteredUserName}
          onChange={userNameHandler}
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          type="number"
          name="age"
          value={enteredAge}
          onChange={userAgeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUsers;
