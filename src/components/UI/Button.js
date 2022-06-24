import PropTypes from "prop-types";
import classes from "./Button.module.css";

const Button = ({ onClick, type, children }) => (
	<button
		className={classes.button}
		type={type ? `${type}` : "button"}
		onClick={onClick}
	>
		{children}
	</button>
);

Button.propTypes = {
	type: PropTypes.string,
	onClick: PropTypes.func,
	children: PropTypes.string.isRequired,
};

Button.defaultProps = {
	type: "button",
	onClick: () => {},
};

export default Button;
