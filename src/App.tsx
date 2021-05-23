import React, { useState } from "react";
import "@/App.scss";
import Header from "@/components/Header";
import TodoForm from "@/components/TodoForm";
import Todos from "@/components/Todos";

import { Todo } from "@/types/Todo";
import { nanoid } from "nanoid";
const App: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([
        {
            id: nanoid(),
            isDone: true,
            title: "Learning React JS",
        },
        {
            id: nanoid(),
            isDone: true,
            title: "Finish React Todo App",
        },
        {
            id: nanoid(),
            isDone: false,
            title: "Become Frontend Master",
        },
    ]);
    const onAddTodo = (newTodo: Todo) => {
        setTodos([newTodo, ...todos]);
    };
    const onDeleteTodo = (id: string) => {
        const updatedTodo = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodo);
    };
    const onToggleCompleted = (id: string) => {
        const todo = todos.map(todo => {
            if (todo.id === id) {
                todo.isDone = !todo.isDone;
            }
            return todo;
        });
        setTodos(todo);
    };

    const handleClearCompleted = () => {
        const todoWithoutCompleted = todos.filter(
            todo => todo.isDone === false
        );
        setTodos(todoWithoutCompleted);
    };

    return (
        <div className="app">
            <div className="container">
                <Header />
                <TodoForm onSubmit={onAddTodo} />
                <Todos
                    todos={todos}
                    onDeleteTodo={onDeleteTodo}
                    onToggleCompleted={onToggleCompleted}
                    onClearCompleted={handleClearCompleted}
                />
            </div>
            <div className="attribution">
                <div>
                    <span>Challenge by </span>
                    <a
                        href="https://www.frontendmentor.io?ref=challenge"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Frontend Mentor
                    </a>
                </div>
                <div>
                    Coded by <a href="https://creeve.me">Christopher Reeve</a>
                </div>
            </div>
        </div>
    );
};

export default App;
