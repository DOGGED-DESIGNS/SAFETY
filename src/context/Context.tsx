import React, { createContext, ReactNode, useContext, useReducer } from "react";

type Service = {
  name: string;
  link: string;
};

const SERVICEINITIAL: Service[] = [
  {
    name: "Fire Safety",
    link: "#",
  },
  {
    name: "Servicing and Mentainance",
    link: "#",
  },
  {
    name: "Risk Assessment",
    link: "#",
  },
  {
    name: "Sprinklers PPE",
    link: "#",
  },
] as const;

type Disttype = {
  type: "SET";
  payload: string;
};

const reducer = (state: Service[], action: Disttype) => {
  switch (action.type) {
    case "SET":
      return SERVICEINITIAL.filter((service) =>
        service.name.toLowerCase().includes(action.payload)
      );

    default:
      return SERVICEINITIAL;
  }
};

export const ContextProvider = createContext<{
  state: Service[];
  dispatch: React.Dispatch<Disttype>;
}>({
  state: SERVICEINITIAL,
  dispatch: () => {},
});

export const ContextMain = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, SERVICEINITIAL);

  return (
    <ContextProvider.Provider
      value={{ state, dispatch }}
    ></ContextProvider.Provider>
  );
};

// import { createContext, useReducer } from "react";

// type StartType = {
//   theme: string;
//   fontsize: number;
// };

// type ActionType = {
//   type: "CHANGE_THEME" | "CHANGE_FONT";
//   payload: number;
// };

// const INITIAL_STATE: StartType = {
//   theme: "dark",
//   fontsize: 16,
// };

// export const ContextTheme = createContext<{
//   state: StartType;
//   dispatch: React.Dispatch<ActionType>;
// }>({
//   state: INITIAL_STATE,
//   dispatch: () => {},
// });

// const reducer = (state: StartType, action: ActionType) => {
//   switch (action.type) {
//     case "CHANGE_THEME":
//       return {
//         ...state,
//         theme: state.theme === "dark" ? "light" : "dark",
//       };
//     case "CHANGE_FONT":
//       return {
//         ...state,
//         fontsize: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
//   const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
//   return (
//     <ContextTheme.Provider value={{ state, dispatch }}>
//       {children}
//     </ContextTheme.Provider>
//   );
// };

// function searchOptions(userInput) {
//     return options.filter(option =>
//       option.toLowerCase().includes(userInput.toLowerCase())
//     );
//   }
