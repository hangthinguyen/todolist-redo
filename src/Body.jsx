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
    },
    [setUserInput]
  );

  const handleChecked = useCallback(
    (todoId) => {
      const result = [];

      for (let i = 0; i < tasks.length; i++) {
        if (todoId !== tasks[i].id) {
          result.push({
            ...tasks[i],
          });
        } else {
          result.push({
            ...tasks[i],
            checked: !tasks[i].checked,
          });
        }
      }

      setTasks(result);
    },
    [tasks]
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

      const input = document.getElementById("input");

      input.value = "";
    },
    [tasks, userInput]
  );

  const handleDelete = useCallback(
    (todoId) => {
      const tasksClone = structuredClone(tasks);

      for (let i = 0; i < tasksClone.length; i++) {
        if (tasksClone[i].id === todoId) {
          tasksClone.splice(i, 1);
        }
      }
      setTasks(tasksClone);
    },
    [tasks]
  );

  return (
    <div className="bg-white w-full py-8 px-12">
      <TodoListItems
        userInput={userInput}
        tasks={tasks}
        onCheck={handleChecked}
        onDelete={handleDelete}
      />

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
