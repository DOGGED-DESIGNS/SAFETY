"use client";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { boolean } from "zod";

type Service = {
  name: string;
  link: string;
};

// { time: Date; title: string; id: string; description: string; authorImage: string | null; advertImage: string | null; tags: string[]; }

type titletype = {
  imagekeys: string[];
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
    name: "Sprinklers",
    link: "#",
  },
  {
    name: "PPE",
    link: "#",
  },
] as const;

type Disttype = {
  type: "SET";
  payload: string;
};

// title dist

type disttitle = {
  type: "arrayupdate";
  payload: string;
};

// reducer for title

const titlereducer = (state: titletype, action: disttitle) => {
  switch (action.type) {
    case "arrayupdate":
      return { ...state, imagekeys: [...state.imagekeys, action.payload] };

    default:
      return state;
  }
};

const reducer = (state: Service[], action: Disttype) => {
  switch (action.type) {
    case "SET":
      return SERVICEINITIAL.filter((service) =>
        service.name.toLowerCase().includes(action.payload.toLowerCase())
      );

    default:
      return SERVICEINITIAL;
  }
};

// to create the wrapper you have to tell it what type of variable of function you will make global. also they set the  which will be overiden by the contextprovider.provide

// dispatch is the messenger

// reducer is the executro
export const ContextProvider = createContext<{
  state: Service[];
  progress: number;
  dispatch: React.Dispatch<Disttype>;
  setLoad: React.Dispatch<React.SetStateAction<boolean>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  load: boolean;
  titleDispatch: React.Dispatch<disttitle>;
  titleState: titletype;
}>({
  state: SERVICEINITIAL,
  titleDispatch: () => {},
  titleState: {
    imagekeys: [],
  },
  dispatch: () => {},
  setLoad: () => {},
  setProgress: () => {},
  load: false,
  progress: 0,
});

export const ContextMain = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const data = localStorage.getItem("title");
    if (data) {
      const finaldata = JSON.parse(data);
      setTitle(finaldata);
    }

    // localStorage.clear();
  }, []);
  // now you are giving the reducer its power and equiping it with the initial state to carry out its task
  const [title, setTitle] = useState<titletype>({
    imagekeys: [],
  });

  const [state, dispatch] = useReducer(reducer, SERVICEINITIAL);

  const [titleState, titleDispatch] = useReducer(titlereducer, title);

  const [load, setLoad] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  return (
    <ContextProvider.Provider
      value={{
        titleState,
        titleDispatch,
        progress,
        setProgress,
        state,
        load,
        setLoad,
        dispatch,
      }}
    >
      {children}
    </ContextProvider.Provider>
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
