"use client";

import React, { Dispatch, createContext, SetStateAction, useState } from "react";

interface VisibilityContextType {
  sidebarIsActive: boolean
  setSidebarIsActive: Dispatch<SetStateAction<boolean>>
}

export const VisibilityContext = createContext<VisibilityContextType>({
  sidebarIsActive: true,
  setSidebarIsActive: () => {}
})


export const VisibilityContextProvider = ({ children }: {children: React.ReactNode}) => {
  const [sidebarIsActive, setSidebarIsActive] = useState<boolean>(true);
  
  return (
    <VisibilityContext.Provider 
      value={{ 
        sidebarIsActive,  
        setSidebarIsActive 
      }}
    >
      {children}
    </VisibilityContext.Provider>
  );
};