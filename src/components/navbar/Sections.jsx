import React from "react";

export default function Sections({ item, index, itemIndex, setItemIndex }) {
  function handleClick() {
    setItemIndex(itemIndex);
  }

  return !index ? (
    <div className="flex flex-col gap-4 px-5  border-b-gray-300 py-4 border-b-[1px]">
      <h1 className="font-bold text-[20px]">{item.heading}</h1>

      {item.items &&
        item.items?.map((data) => (
          <>
          <div className="flex w-[100%] justify-between ">
            <div className="text-[15px] font-semibold text-gray-800 ">{data}</div>
            {item.children && (
              <div onClick={handleClick} className="h-3 w-2 text-gray-500 text-[20px] font-bold">
                {">"}
              </div>
            )}
            </div>
          </>
        ))}
    </div>
  ) : (
    <>
      <div
        className={`${
          index == itemIndex ? "left-0" : "left-[100%]"
        } transition-all duration-300 ease-out absolute`}
      >
        <h1>{index + " " + itemIndex}</h1>
      </div>
    </>
  );
}
