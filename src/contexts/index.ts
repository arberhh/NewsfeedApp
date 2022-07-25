import React, { createContext } from "react";

interface AppContextInterface {
  mode: string,
  language: string,
  setGlobalState: any,
}

export const AppContext = createContext<AppContextInterface>(null);