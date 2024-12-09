"use client";

const Button: React.FC<{
  onClick: () => void;
}> = (props) => {
  const { onClick } = props;

  return (
    <div>
      <button onClick={() => onClick()}>Add</button>
    </div>
  );
};

export default Button;
