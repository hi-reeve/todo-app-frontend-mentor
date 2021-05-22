import React from "react";
import "@/App.scss";
import Header from "@/components/Header";
import TodoForm from "@/components/TodoForm";
import Todos from "@/components/Todos";
const App: React.FC = () => {
    return (
        <div className="app">
            <div className="mx-auto pt-16">
                <Header />
                <TodoForm />
                <Todos />
            </div>
        </div>
    );
};

export default App;
