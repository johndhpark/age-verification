import PropTypes from "prop-types";
import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

function AddUser({ onAddUser }) {
	const [enteredUsername, setEnteredUsername] = useState("");
	const [enteredAge, setEnteredAge] = useState("1");
	const [error, setError] = useState(false);

	const addUserHandler = (event) => {
		event.preventDefault();
		if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
			setError({
				title: "Invalid input",
				message: "Please enter a valid name and age (non-empty values).",
			});
			return;
		}

		if (+enteredAge < 1) {
			setError({
				title: "Invalid age",
				message: "Please enter a valid age (>0).",
			});
			return;
		}

		onAddUser(enteredUsername, enteredAge);
		setEnteredUsername("");
		setEnteredAge("");
	};

	const usernameChangeHandler = (event) => {
		setEnteredUsername(event.target.value);
	};

	const ageChangeHandler = (event) => {
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
					<label htmlFor="username">
						Username
						<input
							id="username"
							type="text"
							value={enteredUsername}
							onChange={usernameChangeHandler}
						/>
					</label>
					<label htmlFor="age">
						Age (Years)
						<input
							type="number"
							id="age"
							value={enteredAge}
							onChange={ageChangeHandler}
						/>
					</label>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</div>
	);
}

AddUser.propTypes = {
	onAddUser: PropTypes.func.isRequired,
};

export default AddUser;
