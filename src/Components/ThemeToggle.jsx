// import {useState} from 'react';

function ThemeToggle({darkMode, setDarkMode}) {
    // const [darkMode, setDarkMode]=useState(false);
    const toggletheme = ()=>{
        setDarkMode(!darkMode);
    };
return (
    <div className="card">
        <h2>Theme Toggle</h2>
        <p className="theme-status"> Current Theme {darkMode ? "Dark" : "Light"}</p>
        <button className="theme-btn" onClick={toggletheme}>{darkMode ? "🌞 Light Theme":"🌛 Dark Theme" }</button>
    </div>
);
}
export default ThemeToggle;
