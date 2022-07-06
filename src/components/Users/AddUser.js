import PropTypes from "prop-types";
import { useRef, useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

function AddUser({ onAddUser }) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }

    onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">
            Username
            <input id="username" type="text" ref={nameInputRef} />
          </label>
          <label htmlFor="age">
            Age (Years)
            <input type="number" id="age" ref={ageInputRef} />
          </label>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
}

AddUser.propTypes = {
  onAddUser: PropTypes.func.isRequired,
};

export default AddUser;
