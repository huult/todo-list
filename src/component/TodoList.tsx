"use client"

type ToDoListProps = {
  lists: { text: string; completed: boolean }[];
  onToggleCompleted: (index: number) => void;
  onDelete: (index: number) => void;
};

const ToDoList: React.FC<ToDoListProps> = ({
  lists,
  onToggleCompleted,
  onDelete,
}) => {
  return (
    <ul className="">
      {lists.length === 0 ? (
        <p>No tasks</p>
      ) : (
        lists.map(({ text, completed }, index) => (
          <li
            key={index}
            style={{ textDecoration: completed ? "line-through" : "none" }}
            className="pl-4"
          >
            <div className="flex flex-row">
              <div className="flex space-x-4 basis-3/4 ">
                <div className="">
                  <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => onToggleCompleted(index)}
                  />
                </div>
                <div>{text}</div>
              </div>
              <div className="basis-1/4 grid justify-items-end">
                <button onClick={() => onDelete(index)}>Delete</button>
              </div>
            </div>
          </li>
        ))
      )}
    </ul>
  );
};

export default ToDoList;
