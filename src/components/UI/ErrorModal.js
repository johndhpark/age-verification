import PropTypes from "prop-types";
import * as ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModal.module.css";

const Backdrop = ({ onConfirm }) => (
  /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
  <div
    className={classes.backdrop}
    onClick={onConfirm}
    onKeyPress={onConfirm}
  />
);

const ModalOverlay = ({ title, message, onConfirm }) => (
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
);

const ErrorModal = ({ title, message, onConfirm }) => (
  <>
    {ReactDOM.createPortal(
      <Backdrop onClick={onConfirm} />,
      document.getElementById("backdrop-root")
    )}
    {ReactDOM.createPortal(
      <ModalOverlay title={title} message={message} onConfirm={onConfirm} />,
      document.getElementById("overlay-root")
    )}
  </>
);

Backdrop.propTypes = {
  onConfirm: PropTypes.func.isRequired,
};

ModalOverlay.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

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
