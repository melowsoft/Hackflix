import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { AppContextProvider } from "./context/AppContextProvider";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
   <AppContextProvider>
        <App />  
   </AppContextProvider>
   </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
