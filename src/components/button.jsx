import PropTypes from "prop-types";
import "./button.scss";

function DynamicButton({ buttonText}) {
  
  return <button className="button">{buttonText}</button>;
}

DynamicButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default DynamicButton;
