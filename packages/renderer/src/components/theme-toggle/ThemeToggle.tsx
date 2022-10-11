import useTheme from "../../contexts/themeContext";
import { FiSun, FiMoon } from "react-icons/fi";
const ThemeToggle = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <span className="mx-3 cursor-pointer" onClick={toggleTheme}>
      {theme == "dark" ? <FiSun /> : <FiMoon />}
    </span>
  );
};

export default ThemeToggle;
