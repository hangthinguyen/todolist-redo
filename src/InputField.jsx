const InputField = ({ userInput, onChange, onAdd }) => {
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={userInput}
          className="border-2 border-purple-400"
          onChange={onChange}
        />
        <input type="submit" onClick={onAdd} value="Add" />
      </form>
    </div>
  );
};

export default InputField;
