import React, { Fragment } from "react";
import "@/components/TodoForm.scss";
const TodoForm: React.FC = () => {
    return (
        <Fragment>
            <form className="form">
                <div className="input--wrapper">
                    <input type="checkbox" className="input--checkbox" />
                    <input
                        type="text"
                        className="input--text"
                        placeholder="Create a new todo..."
                    />
                </div>
            </form>
        </Fragment>
    );
};

export default TodoForm;
