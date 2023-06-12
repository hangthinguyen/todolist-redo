const InputField = ({ userInput, onChange, onAdd }) => {
  return (
    <div className="flex justify-center w-full p-4">
      <form className="flex gap-1 justify-center items-center">
        <input
          type="text"
          value={userInput}
          className="border-2 border-purple-400 py-1 px-4 rounded-full outline-0"
          onChange={onChange}
          placeholder="what to do"
          id="input"
        />
        <input
          type="submit"
          onClick={onAdd}
          value="+"
          className="bg-purple-400 rounded-full w-7 h-7 flex justify-center items-center text-white font-bold hover:cursor-pointer"
        />
      </form>
    </div>
  );
};

export default InputField;
