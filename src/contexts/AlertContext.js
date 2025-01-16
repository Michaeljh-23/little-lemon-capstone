import React, { createContext, useContext, useState } from "react";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const srollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const openAlert = (isMobile = false) => {
    console.log("neep", isMobile);
    setIsAlertVisible(true);
    setIsMobileView(isMobile);
    const alertContainer = document.getElementById("alert-container");
    alertContainer.classList.add("visible");
    isMobile && alertContainer.classList.add("mobile");
  };

  const closeAlert = () => {
    setIsAlertVisible(false);
    setIsMobileView(false);
    const alertContainer = document.getElementById("alert-container");
    alertContainer.classList.remove("visible");
  };

  return (
    <AlertContext.Provider
      value={{
        isAlertVisible,
        isMobileView,
        srollToTop,
        openAlert,
        closeAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
