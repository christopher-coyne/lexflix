import React, { useState } from "react";

export const suggestionsContext = React.createContext({
  setShowExtension: null,
  showExtension: false,
});

export const SuggestionsContext = ({ children }) => {
  const [showExtension, setShowExtension] = useState(false);
  return (
    <suggestionsContext.Provider value={{ setShowExtension, showExtension }}>
      {children}
    </suggestionsContext.Provider>
  );
};
