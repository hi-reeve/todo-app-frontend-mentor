import React, { Fragment, useState } from "react";
import TodoItem from "@/components/TodoItem";
import "@/components/Todos.scss";
import { Filter, Todo } from "@/types/Todo";
import FilterButton from "./FilterButton";

import { TransitionGroup, CSSTransition } from "react-transition-group";

interface Props {
    todos: Todo[];
    onDeleteTodo: (id: string) => void;
    onToggleCompleted: (id: string) => void;
    onClearCompleted: () => void;
}
const Todos: React.FC<Props> = (props: Props) => {
    const uncompletedTodo = props.todos.filter(todo => todo.isDone === false);
    const [filter, setFilter] = useState<Filter>("All");
    const handleFilterClick = (filter: Filter) => {
        setFilter(filter);
    };
    const FILTER_MAP = {
        All: () => true,
        Active: (todo: Todo) => !todo.isDone,
        Completed: (todo: Todo) => todo.isDone,
    };
    const FILTER_NAMES = Object.keys(FILTER_MAP) as Filter[];
    const filterList = FILTER_NAMES.map((currentFilter: Filter) => (
        <FilterButton
            name={currentFilter}
            key={currentFilter}
            isActive={currentFilter === filter}
            handleFilterClick={handleFilterClick}
        />
    ));
    const TodoList = props.todos.filter(FILTER_MAP[filter]).map(todo => {
        return (
            <CSSTransition key={todo.id} timeout={300} classNames="todo">
                <div>
                    <TodoItem
                        todo={todo}
                        onDeleteTodo={props.onDeleteTodo}
                        onToggleCompleted={props.onToggleCompleted}
                    />
                </div>
            </CSSTransition>
        );
    });
    return (
        <Fragment>
            <div className="todos ">
                <div className="todos--wrapper">
                    <TransitionGroup>{TodoList}</TransitionGroup>

                    <div className="todos--actions">
                        <div className="todos--left">
                            {uncompletedTodo.length > 0
                                ? `${uncompletedTodo.length} items left`
                                : "No todo left"}
                        </div>
                        <div className="todos--filter-desktop">
                            {filterList}
                        </div>
                        <div
                            onClick={props.onClearCompleted}
                            className="todos--clear"
                        >
                            Clear Completed
                        </div>
                    </div>
                </div>
            </div>
            <div className="todos--filter-wrapper">
                <div className="todos--filter-mobile">{filterList}</div>
            </div>
        </Fragment>
    );
};

export default Todos;
