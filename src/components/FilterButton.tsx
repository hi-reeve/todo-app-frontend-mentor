import { Filter } from "@/types/Todo";
import React from "react";

interface Props {
    isActive: boolean;
    name: Filter;
    handleFilterClick: (filter: Filter) => void;
}
const FilterButton: React.FC<Props> = (props: Props) => {
    return (
        <div
            className={`todos--filter-action ${props.isActive ? "active" : ""}`}
            onClick={() => props.handleFilterClick(props.name)}
        >
            {props.name}
        </div>
    );
};

export default FilterButton;
