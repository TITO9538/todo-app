import React from 'react'
import { createContext, useContext, useState } from "react";

const TodoStatusContext = createContext();

export function TodoStatusProvider({ children }) {
  const [allCompleted, setAllCompleted] = useState(false);

  return (
    <TodoStatusContext.Provider value={{ allCompleted, setAllCompleted }}>
      {children}
    </TodoStatusContext.Provider>
  );
}

export function useTodoStatus() {
  return (
    useContext(TodoStatusContext)
)
}