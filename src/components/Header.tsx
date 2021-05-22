import React, { useEffect, useState } from "react";

import IconMoon from "@/assets/images/icon-moon.svg";
import IconSun from "@/assets/images/icon-sun.svg";
import "@/components/Header.scss";
const Header: React.FC = () => {
    const [isDark, setIsDark] = useState(
        localStorage.getItem("dark") === "false" ? false : true
    );
    const body = document.querySelector("body") as HTMLBodyElement;

    useEffect(() => {
        if (isDark == true && body) body.classList.add("dark");
        else body.classList.remove("dark");

        return () => {
            body.classList.remove("dark");
        };
    }, [isDark, body]);

    const toggleDarkMode = () => {
        setIsDark(!isDark);
        localStorage.setItem("dark", (!isDark).toString());
    };
    return (
        <header className="todo--header">
            <h1 className="todo--title">Todo</h1>
            <button onClick={toggleDarkMode} className="toggle-dark">
                <img src={isDark ? IconSun : IconMoon} />
            </button>
        </header>
    );
};
export default Header;
