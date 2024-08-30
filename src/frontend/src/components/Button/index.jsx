const Button = ({ onClick, label, type = 'button', className }) => {
  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={`px-4 py-2 font-outfit font-medium text-xl text-black-normal rounded hover:text-redNormal ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
