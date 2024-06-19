import { MdDelete } from "react-icons/md";
import "./index.css";

const TodoItem = (props) => {
  const { todoDetails } = props;
  const { name } = contactDetails;
  return (
    <li className="list_container">
      <div className="todo_items_container">
        <input type="checkbox" />
        <p>{name}</p>
        <MdDelete />
      </div>
    </li>
  );
};
