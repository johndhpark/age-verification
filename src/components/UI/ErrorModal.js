import PropTypes from "prop-types";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const ErrorModal = ({ title, message, onConfirm }) => (
	<div>
		{/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
		<div
			className={classes.backdrop}
			onClick={onConfirm}
			onKeyPress={onConfirm}
		/>
		<Card className={classes.modal}>
			<header className={classes.header}>
				<h2>{title}</h2>
			</header>
			<div className={classes.content}>
				<p>{message}</p>
			</div>
			<footer className={classes.actions}>
				<Button onClick={onConfirm}>Okay</Button>
			</footer>
		</Card>
	</div>
);

ErrorModal.propTypes = {
	title: PropTypes.string,
	message: PropTypes.string,
	onConfirm: PropTypes.func.isRequired,
};

ErrorModal.defaultProps = {
	title: "No Title Given",
	message: "No Message Given",
};

export default ErrorModal;
