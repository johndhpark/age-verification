import PropTypes from "prop-types";
import Card from "../UI/Card";
import classes from "./UsersList.module.css";

const UsersList = ({ users }) => (
	<Card className={classes.users}>
		<ul>
			{users.map(({ name, age, id }) => (
				<li key={id}>
					{name}({age} years old)
				</li>
			))}
		</ul>
	</Card>
);

UsersList.propTypes = {
	users: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			age: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default UsersList;
