import TodoListItems from "./TodoListItems";
import ButtonContainer from "./ButtonContainer";
import { useCallback, useState } from "react";
import InputField from "./InputField";

const Body = () => {
  const [newtaskButtonClicked, setNewTaskButtonOnClicked] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleOnClickNewTaskButton = useCallback(() => {
    setNewTaskButtonOnClicked(true);
  }, []);

  const handleInput = useCallback(
    (e) => {
      setUserInput(e.target.value);
      console.log(e.target.value);
    },
    [setUserInput]
  );

  const handleOnAdd = useCallback(
    (e) => {
      e.preventDefault();
      setTasks([
        ...tasks,
        {
          id: Math.random() * 1000,
          checked: false,
          taskName: userInput,
        },
      ]);

      setNewTaskButtonOnClicked(false);
    },
    [tasks, userInput]
  );

  return (
    <div className="bg-white w-full py-8 px-12">
      <TodoListItems userInput={userInput} tasks={tasks} />

      <section
        style={{
          display: newtaskButtonClicked ? "flex" : "none",
        }}
      >
        <InputField onChange={handleInput} onAdd={handleOnAdd} />
      </section>

      <ButtonContainer
        onClick={handleOnClickNewTaskButton}
        userInput={userInput}
        setUserInput={setUserInput}
      />
    </div>
  );
};

export default Body;
