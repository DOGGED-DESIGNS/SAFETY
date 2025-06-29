"use client";
import { Blog } from "@prisma/client";
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

// this is a reducer to fine the title of blog post
//step1 create tye types for your iniitial states:[] and your action:{payload}
//step2 use switch and case to give conditional returs based on you action:{payload}

type titleAction =
  | {
      instruct: "FIND";
      payload: string;
    }
  | {
      instruct: "SET";
      payload2: Blog[];
    };

const reduceblogpost = (state: Blog[], action: titleAction) => {
  switch (action.instruct) {
    case "FIND":
      return state.filter((title) =>
        title.title.toLowerCase().includes(action.payload)
      );

    case "SET":
      return action.payload2;

    default:
      return state;
  }
};

// to create the wrapper you have to tell it what type of variable of function you will make global. also they set the  which will be overiden by the contextprovider.provide

// dispatch is the messenger

// reducer is the executro
export const ContextProvider = createContext<{
  titlesort: Blog[];
  titlesortDispatch: React.Dispatch<titleAction>;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  state: Service[];
  progress: number;
  dispatch: React.Dispatch<Disttype>;
  setLoad: React.Dispatch<React.SetStateAction<boolean>>;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
  load: boolean;
  titleDispatch: React.Dispatch<disttitle>;
  titleState: titletype;
}>({
  titlesort: [],
  titlesortDispatch: () => {},
  setToggle: () => {},
  toggle: false,
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
  // now you are giving the reducer its power and equiping it with the initial state to carry out its task
  const [title, setTitle] = useState<titletype>({
    imagekeys: [],
  });

  const [toggle, setToggle] = useState<boolean>(false);

  const initialsort: Blog[] = [];

  const [titlesort, titlesortDispatch] = useReducer(
    reduceblogpost,
    initialsort
  );

  const [state, dispatch] = useReducer(reducer, SERVICEINITIAL);

  const [titleState, titleDispatch] = useReducer(titlereducer, title);

  const [load, setLoad] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  return (
    <ContextProvider.Provider
      value={{
        titleState,
        titlesort,
        titlesortDispatch,
        toggle,
        setToggle,
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
