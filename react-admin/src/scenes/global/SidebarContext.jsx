import React, { useState, createContext, useContext } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import Sidebar from "./Sidebar";

const SidebarContext = createContext({});

export const MyProSidebarProvider = ({ children }) => {
  const [sidebarRTL, setSidebarRTL] = useState(false);
  const [broken, setBroken] = useState(false);
  const [toggled, setToggled] = useState(false);

  const [sidebarBackgroundColor, setSidebarBackgroundColor] = useState(undefined);
  const [sidebarImage, setSidebarImage] = useState(undefined);
  return (
    <ProSidebarProvider>
      <SidebarContext.Provider
        value={{
          sidebarBackgroundColor,
          setSidebarBackgroundColor,

          sidebarImage,
          setSidebarImage,

          sidebarRTL,
          setSidebarRTL,

          broken, 
          setBroken,

          toggled, 
          setToggled,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: sidebarRTL ? "row-reverse" : "row",
          }}
        >
          <Sidebar />
          {children}
        </div>
      </SidebarContext.Provider>
    </ProSidebarProvider>
  );
};

export const useSidebarContext = () => useContext(SidebarContext);
