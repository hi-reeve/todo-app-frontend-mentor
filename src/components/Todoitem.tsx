import React, { useState } from "react";

interface Props {
    title: string;
    isDone: boolean;
    // onClose: () => void;
}
const Todoitem: React.FC<Props> = (props: Props) => {
    const [isDone, setIsDone] = useState(props.isDone);
    return (
        <div className="todo--item flex px-4 py-4 items-center border-b border-light-theme-light-grayish-blue dark:border-dark-theme-very-dark-grayish-blue-2">
            <label className="w-full cursor-pointer">
                <input
                    type="checkbox"
                    className="input--checkbox"
                    checked={isDone}
                    onChange={() => setIsDone(!isDone)}
                />
                <span
                    className={`ml-3  ${
                        isDone
                            ? "line-through text-light-theme-light-grayish-blue dark:text-dark-theme-very-dark-grayish-blue-2"
                            : "text-light-theme-dark-grayish-blue"
                    }`}
                >
                    {props.title}
                </span>
            </label>
            <button className="font-bold ml-auto text-light-theme-dark-grayish-blue">
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
