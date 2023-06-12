import Task from "./Task";

const TodoListItems = ({ tasks, onCheck, onDelete }) => {
  return (
    <div className="flex flex-col gap-4 mb-6 p-4">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          isChecked={task.checked}
          name={task.taskName}
          onCheck={onCheck}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TodoListItems;
