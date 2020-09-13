const ThemeContext = React.createContext(null);

const Content = () => {
    console.log(React.useContext(ThemeContext))
    const context = React.useContext(ThemeContext); // change this
    return (
        <section className={`theme-${context.theme}`}>
            <span>Current theme: {context.theme}</span>
            <button onClick={context.switchTheme}>Switch Theme</button>
        </section>
    );
};

function App() {
    const [theme, setTheme] = React.useState("dark");
    const switchTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
        return theme
    };
    return (
        <ThemeContext.Provider value={{theme, switchTheme}} >
            <Content />
        </ThemeContext.Provider>
    );
}

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);