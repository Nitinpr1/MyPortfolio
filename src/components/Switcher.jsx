import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import darkmode from "../constants/darkmode";

const Switcher = () => {
  const [colorTheme, setTheme] = darkmode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div className="bg-slate-300 p-1 rounded-full">
      <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={20} />
    </div>
  );
};

export default Switcher;
