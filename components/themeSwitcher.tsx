import { SunIcon } from "@heroicons/react/20/solid";
import themeStore from "~stores/themeStore";

const ThemeSwitcher = ({ className }: any) => {
  const { darkMode, toggleDarkMode } = themeStore();
  const themeBinder = () => {
    console.log(darkMode);
    toggleDarkMode(darkMode === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={themeBinder}
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${
        className ? className : ""
      }`}
    >
      <SunIcon className="h-4 w-4 text-white"></SunIcon>

      <span className="sr-only">Icon description</span>
    </button>
  );
};

export default ThemeSwitcher;
