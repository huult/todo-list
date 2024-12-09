const Input: React.FC<{ onChange: (val: string) => void }> = (props) => {
  const { onChange } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="Title..."
        onChange={(e) => {
          console.log("changed", e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
