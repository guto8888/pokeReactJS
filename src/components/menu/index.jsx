import React from "react";
import styles from "./style.module.css"
import { NavLink } from "react-router-dom";

import { Theme, themes } from "../../contexts/theme.js"
import { useContext } from "react";

const Menu = () => {
    const { theme, setTheme } = useContext(Theme)
    return (
        <>
         <p className={styles.descriptionPage}>Criado com React</p>
        <nav className={styles.nav} style={{backgroundColor: theme.menu}}>
        <NavLink to="/">
            <img className={styles.pokeball} src="https://www.pngall.com/wp-content/uploads/4/Pokeball-PNG-Images.png" alt="" />
        </NavLink>
            <button style={{background: theme.btn}} onClick={() => {
                setTheme(theme === themes.light ? themes.dark : themes.light)
            }
                 } className={styles.btnMenu}>Mudar Tema: <br /> <span className={styles.span}>{theme.type}</span></button>
        </nav>
        </>        
    )
}

export default Menu

