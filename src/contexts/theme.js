import { createContext, useState } from "react"

export const themes = {
    light: {
        type: "Light",
        color: "whitesmoke",
        menu: "darkcyan",
        card: "#2e2efc",
        background: "cadetblue",
        btn: "royalblue",
        moves: "#e8e895"
    },
    dark: {
        type: "Dark",
        color: "#292929",
        card: "#03035c",
        background: "darkslategray",
        menu: "#263f40",
        btn: "blue",
        moves: "grey"
    }
}

export const Theme = createContext({})

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(themes.light)

    return (
        <Theme.Provider value={{theme, setTheme}} >
            {props.children}
        </Theme.Provider>
    )
}
