import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function AddUsers(props) {
  const [enteredUserName, setEnteredUserName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age(non empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      // +enteredAge is to convert given age into number
      setError({
        title: "Invalid Age",
        message: "Please enter a valid age >0",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredAge);
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

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </div>
  );
}

export default AddUsers;
