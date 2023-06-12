import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ name, onCheck, isChecked, id, onDelete }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4 hover:cursor-pointer">
        <section onClick={() => onCheck(id)}>
          {!isChecked ? (
            <FontAwesomeIcon icon={faCircle} />
          ) : (
            <FontAwesomeIcon icon={faCircleCheck} />
          )}
        </section>

        <section
          className="text-lg"
          style={{
            textDecoration: isChecked ? "line-through" : "none",
          }}
        >
          {name}
        </section>
      </div>

      {isChecked ? (
        <div
          className="text-xl hover:cursor-pointer"
          onClick={() => onDelete(id)}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </div>
      ) : null}
    </div>
  );
};

export default Task;
