import React from "react";
import "@/components/TodoItem.scss";
import { Todo } from "@/types/Todo";
interface Props {
    todo: Todo;
    onDeleteTodo: (id: string) => void;
    onToggleCompleted: (id: string) => void;
}
const Todoitem: React.FC<Props> = (props: Props) => {
    return (
        <div className="todo--item group">
            <label className="todo--label">
                <input
                    type="checkbox"
                    className="input--checkbox"
                    checked={props.todo.isDone}
                    onChange={() => props.onToggleCompleted(props.todo.id)}
                />
                <span
                    className={`todo--text  ${
                        props.todo.isDone ? "todo--text-completed" : ""
                    }`}
                >
                    {props.todo.title}
                </span>
            </label>
            <button
                className="todo--delete"
                onClick={() => props.onDeleteTodo(props.todo.id)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-x-lg w-4 h-4  "
                    viewBox="0 0 16 16"
                >
                    <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                </svg>
            </button>
        </div>
    );
};

export default Todoitem;
