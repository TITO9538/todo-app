import React from "react";
import { Todo } from "./Todo";
import { NewTodo } from "./NewTodo";
import useItems from "../hooks/useItems";

export default function Main() {
    const {handleSubmit, items, deleteItem, updateStatusItem} = useItems();


  return (
    <main className="w-full min-h-90 flex flex-col items-center justify-start gap-5 z-20">
      <NewTodo
      handleSubmit={handleSubmit}
      ></NewTodo>
      <Todo
      items={items}
      deleteItem={deleteItem}
      updateStatusItem={updateStatusItem}
      ></Todo>
    </main>
  );
}
