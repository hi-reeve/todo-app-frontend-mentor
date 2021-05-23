import React, { Fragment, useState } from "react";
import "@/components/TodoForm.scss";
import { Todo } from "@/types/Todo";
import { nanoid } from "nanoid";
interface Props {
    onSubmit: (newTodo: Todo) => void;
}
const TodoForm: React.FC<Props> = (props: Props) => {
    const [isDone, setIsDone] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const resetForm = () => {
        setIsDone(false);
        setTitle("");
    };
    const handleOnSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        props.onSubmit({
            id: nanoid(),
            title,
            isDone,
        });
        resetForm();
    };
    return (
        <Fragment>
            <form className="form" onSubmit={handleOnSubmit}>
                <div className="input--wrapper">
                    <input
                        type="checkbox"
                        className="input--checkbox"
                        checked={isDone}
                        onChange={() => setIsDone(!isDone)}
                    />
                    <input
                        type="text"
                        className="input--text"
                        placeholder="Create a new todo..."
                        value={title}
                        onChange={event => {
                            setTitle(event.target.value);
                        }}
                    />
                </div>
            </form>
        </Fragment>
    );
};

export default TodoForm;
