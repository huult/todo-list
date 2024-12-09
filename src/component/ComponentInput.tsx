'use client';

type InputProps = {
  value: string;
  onChange: (val: string) => void;
};

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Title..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
