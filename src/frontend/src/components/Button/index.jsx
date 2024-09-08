import PropTypes from "prop-types";

const Button = ({ label, type = "button", className }) => {
  return (
    <button
      type={type}
      className={`px-2 lg:px-4 py-2 font-outfit font-medium text-[14px] lg:text-[16px] xl:text-[20px] text-black-normal rounded hover:text-primaryGreen ${className}`}
    >
      {label}
    </button>
  );
};
Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
