import React, { createContext, useState } from "react";

const initalLightModeContextValue = {
  lightMode: false,
  toogleLightMode: () => {},
};
const LightModeContext = createContext({
  lightMode: false,
  toogleLightMode: () => {},
});

function LightModeProvider({ children }) {
  const [lightMode, setLightMode] = useState(false);
  const toogleLightMode = () => {
    setLightMode(!lightMode);
  };

  return (
    <div>
      <LightModeContext.Provider value={{ lightMode, toogleLightMode }}>
        {children}
      </LightModeContext.Provider>
    </div>
  );
}

export { LightModeContext, LightModeProvider };
