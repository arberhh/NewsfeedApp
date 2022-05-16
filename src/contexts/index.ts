import React from "react";

interface AppContextInterface {
  mode: string;
  language: string;
  setGlobalState: any;
}

export const AppContext = React.createContext<AppContextInterface>(null);