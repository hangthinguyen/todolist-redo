const ButtonContainer = ({ onClick }) => {
  return (
    <div className="bg-white w-full text-center pt-6">
      <button className="bg-purple-400 py-2 px-4 rounded-3xl" onClick={onClick}>
        New Task
      </button>
    </div>
  );
};

export default ButtonContainer;
