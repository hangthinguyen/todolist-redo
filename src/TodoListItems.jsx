import Task from "./Task";

const TodoListItems = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} name={task.taskName} checked={task.checked} />
      ))}
    </div>
  );
};

export default TodoListItems;
