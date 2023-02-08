const Button = ({ id, value }) => {
  return (
    <button id={id} className="calc-button">
      {value}
    </button>
  );
};

export default Button;
