import PropTypes from 'prop-types';
//import { useDispatch } from 'react-redux';
//import * as actions from '../../store/modules/cart/actions';

const Button = ({ onClick, label, type = 'button', className }) => {

  // const dispatch = useDispatch();

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   dispatch(actions.cartRequest());
  // }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-2 lg:px-4 py-2 font-outfit font-medium text-[14px] lg:text-[16px] xl:text-[20px] text-black-normal rounded hover:text-primaryGreen ${className}`}
    >
      {label}
    </button>
  );
};
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Button;
