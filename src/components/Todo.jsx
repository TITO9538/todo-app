import React, { useState } from "react";
import Item from "./Item";

export function Todo({ items, deleteItem, updateStatusItem }) {
  const [whatToShow, setWhatToShow] = useState(1);

  return (
    <>
      <div className="z-20 text-xs rounded-md overflow-hidden w-80 shadow-2xl md:w-130 transition-colors duration-500">
        {items && whatToShow == 1 &&
          items.map((item) => (
            <Item
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              updateStatusItem={updateStatusItem}></Item>
          ))}
          {items && whatToShow == 2 &&
          items.filter((item) => item.status === true).map((item) => (
            <Item
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              updateStatusItem={updateStatusItem}></Item>
          ))}
          {items && whatToShow == 3 &&
          items.filter((item) => item.status === false).map((item) => (
            <Item
              key={item.id}
              item={item}
              deleteItem={deleteItem}
              updateStatusItem={updateStatusItem}></Item>
          ))}
        <div className="w-full flex items-center justify-between px-5 py-4 bg-white dark:bg-[#25273cff] text-[#9394a5ff] dark:text-[#777a92ff] z-20 transition-colors duration-700">
          <span>{items.filter((item) => item.status === true).length} items left</span>
          <div className="hidden md:flex gap-2">
            <span
              onClick={() => {
                setWhatToShow(1);
              }}
              className={`${
                whatToShow == 1 ? "text-blue-500" : "hover:text-gray-800 hover:dark:text-[#e4e5f1ff]"
              } cursor-pointer`}>
              All
            </span>
            <span
              onClick={() => {
                setWhatToShow(2);
              }}
              className={`${
                whatToShow == 2 ? "text-blue-500" : "hover:text-gray-800 hover:dark:text-[#e4e5f1ff]"
              } cursor-pointer`}>
              Active
            </span>
            <span
              onClick={() => {
                setWhatToShow(3);
              }}
              className={`${
                whatToShow == 3 ? "text-blue-500" : "hover:text-gray-800 hover:dark:text-[#e4e5f1ff]"
              } cursor-pointer`}>
              Completed
            </span>
          </div>
          <span
            onClick={() => {
              items
                .filter((item) => item.status === false)
                .forEach((item) => updateStatusItem(item));
            }}
            className="hover:text-gray-800 hover:dark:text-[#e4e5f1ff] cursor-pointer">
            Clear Completed
          </span>
        </div>
      </div>
      <div className="w-80 text-sm flex gap-5 items-center justify-center px-5 py-4 bg-white text-[#9394a5ff] z-20 shadow-xl rounded-md md:hidden transition-colors duration-700">
        <span
          onClick={() => {
            setWhatToShow(1);
          }}
          className={`${whatToShow == 1 ? "text-blue-500" : "hover:text-gray-800 hover:dark:text-[#e4e5f1ff]"} cursor-pointer`}>
          All
        </span>
        <span
          onClick={() => {
            setWhatToShow(2);
          }}
          className={`${whatToShow == 2 ? "text-blue-500" : "hover:text-gray-800 hover:dark:text-[#e4e5f1ff]"} cursor-pointer`}>
          Active
        </span>
        <span
          onClick={() => {
            setWhatToShow(3);
          }}
          className={`${whatToShow == 3 ? "text-blue-500" : "hover:text-gray-800 hover:dark:text-[#e4e5f1ff]"} cursor-pointer`}>
          Completed
        </span>
      </div>
    </>
  );
}
