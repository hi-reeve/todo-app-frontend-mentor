import React from "react";
import Todoitem from "./Todoitem";
const Todos: React.FC = () => {
    return (
        <div className="w-full px-8 mt-8 ">
            <div className="bg-white dark:bg-dark-theme-very-dark-desaturated-blue rounded shadow">
                <Todoitem isDone title="Jog around the park" />
                <Todoitem isDone={false} title="Do react todo app" />
                <Todoitem isDone title="Night prayer" />
				<Todoitem isDone={false} title="Read a book" />
				<div className="flex px-4 py-4 text-sm dark:text-dark-theme-very-dark-grayish-blue rounded-b">
					<div className="flex-1">5 items left</div>
					<div className="md:block font-bold hidden w-full mx-auto flex-1 text-center">All Active Completed</div>
					<div className="ml-auto flex-1 text-right">Clear Completed</div>
				</div>
            </div>
        </div>
    );
};

export default Todos;
