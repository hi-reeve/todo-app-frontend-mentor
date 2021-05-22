import React from "react";
import "@/App.scss";
import Header from "@/components/Header";
import TodoForm from "@/components/TodoForm";
import Todos from "@/components/Todos";
const App: React.FC = () => {
    return (
        <div className="app">
            <div className="mx-auto lg:pt-24  pt-16 lg:w-1/2 md:w-2/3">
                <Header />
                <TodoForm />
                <Todos />
                <div className="md:hidden font-bold flex w-full mx-auto flex-1 text-center px-8 mt-5 items-center justify-evenly bg-white dark:bg-dark-theme-very-dark-desaturated-blue">
					<div >All</div>
					<div>Active</div>
					<div>Completed</div>
                </div>
            </div>
        </div>
    );
};

export default App;
