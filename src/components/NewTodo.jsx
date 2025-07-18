import React, { useEffect, useState } from "react";

export function NewTodo({ handleSubmit }) {
  const [inputValue, setInputValue] = useState("");

  useEffect(()=> {
    setInputValue("")
  }, [handleSubmit])

  return (
    <div className="w-80 px-5 py-4 bg-white dark:bg-[#25273cff] text-[#484b6aff] dark:text-[#cacde8ff] text-xs rounded-md z-20 md:w-130 md:text-lg transition-colors duration-500">
      <form onSubmit={handleSubmit} className="flex gap-3">
        <button
          type="submit"
          className="size-5 border border-[#d2d3dbff] dark:border-[#4d5066ff] rounded-full cursor-pointer md:size-7"></button>
        <input
          type="text"
          id="name"
          name="name"
          value={inputValue}
          autoComplete="off"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Create a new todo..."
          className="focus:outline-none md:w-100"
        />
      </form>
    </div>
  );
}
