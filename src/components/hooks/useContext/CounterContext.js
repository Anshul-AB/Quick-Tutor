import { createContext } from "react";

export const CounterContext = createContext(null); //This line exports the CounterContext so that it can be used in other files.

//Creates a new context named CounterContext using the createContext function.

/* The createContext function takes an optional argument, which is the default value of the context. 
In this case, the default value is set to null.*/
