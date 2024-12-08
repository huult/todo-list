const Input: React.FC<{ onChange: (val: string) => void }> = (props) => {
  const { onChange } = props;
  return (
    <div>
      <input
        type="text"
        placeholder="Title..."
      />
    </div>
  );
};

export default Input;
