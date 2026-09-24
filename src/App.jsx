import { useState } from 'react';
import Counter from './Components/Counter';
import Theme from './Components/ThemeToggle';
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <div className='container'>
        <div className='title'>
          <h1>React State Management</h1>
          <p>UseState Hook - Counter & Theme Toggle</p>
        </div>
        <div className='cards'>
          <Counter />
          <Theme darkMode={darkMode} setDarkMode={setDarkMode}/>
        </div>
      </div>
    </div>
  )
}
