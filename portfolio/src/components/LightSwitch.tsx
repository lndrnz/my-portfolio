import { useState } from "react";

const LightSwitch = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkMode");
    return savedDarkMode ? JSON.parse(savedDarkMode) : false;
  });

  const handleDark = () => {
    setIsDark(!isDark);
    localStorage.setItem("darkMode", JSON.stringify(!isDark));
  };

  if (isDark) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <div>
      {!isDark ? (
        <img
          className="light-dark"
          src="https://i.imgur.com/aC79zoE.png"
          alt="dark"
          onClick={handleDark}
        />
      ) : (
        <img
          className="light-dark"
          src="https://i.imgur.com/bL1Lcll.png"
          alt="light"
          onClick={handleDark}
        />
      )}
    </div>
  );
};

export default LightSwitch;
