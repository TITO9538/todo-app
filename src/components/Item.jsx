import React from "react";

export default function Item({ item, deleteItem, updateStatusItem }) {
  const updateItem = (e) => {
    const { id } = e.target;
    if (id !== "item") {
      updateStatusItem(item);
      console.log(e.target.id);
    }
  };

  return (
    <article className="transition-all duration-300 ease-in-out transform">
      <div
        id="item"
        onClick={updateItem}
        className="w-full flex items-center justify-between group text-xs px-5 py-4 bg-white dark:bg-[#25273cff] text-[#484b6aff] dark:text-[#cacde8ff] md:text-lg z-20 transition-colors duration-600">
        <div className={`gap-3 ${!item.status ? "hidden" : "flex items-center cursor-pointer"} transition-all duration-300`}>
          <button className="size-5 border border-[#d2d3dbff] dark:border-[#4d5066ff] rounded-full cursor-pointer md:size-7"></button>
          <p className="focus:outline-none pt-1">{item.name}</p>
        </div>
        <div className={`gap-3 ${item.status ? "hidden" : "flex items-center cursor-pointer"}`}>
          <button className="flex items-center justify-center size-5 bg-gradient-to-br from-[#57ddffff] to-[#c058f3ff] rounded-full cursor-pointer md:size-7">
            <img src="../../images/icon-check.svg" alt="icon-check" />
          </button>
          <p className="focus:outline-none pt-1 line-through text-[#d2d3dbff] dark:text-[#4d5066ff]">{item.name}</p>
        </div>
        <img
          id="cross"
          src="../../images/icon-cross.svg"
          alt="cross"
          onClick={() => {
            deleteItem(item.id);
          }}
          className="size-3 cursor-pointer md:hidden md:group-hover:block"
        />
      </div>
      <hr className="border-[#d2d3dbff] dark:border-[#4d5066ff]" />
    </article>
  );
}
