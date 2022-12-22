import { createContext, useState } from "react";

export const SingupContext = createContext({
  singupOneIsVisible: false,
  singupTwoIsVisible: false,
  ToggleSingupOne: () => {},
  ToggleSingupTwo: () => {},
});

function SingupContextProvider({ children }) {
  const [singupOneVisibility, setSingupOneVisibility] = useState(false);
  const [singupTwoVisibility, setSingupTwoVisibility] = useState(false);

  function ToggleSingupOne() {
    setSingupOneVisibility((prevValue) => !prevValue);
  }
  function ToggleSingupTwo() {
    setSingupTwoVisibility((prevValue) => !prevValue);
  }

  const value = {
    singupOneIsVisible: singupOneVisibility,
    singupTwoIsVisible: singupTwoVisibility,
    ToggleSingupOne: ToggleSingupOne,
    ToggleSingupTwo: ToggleSingupTwo,
  };

  return (
    <SingupContext.Provider value={value}>{children}</SingupContext.Provider>
  );
}

export default SingupContextProvider;
