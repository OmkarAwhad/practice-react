import React from "react";

function ItemDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="bg-yellow-300 w-[25%] py-2 rounded-lg text-lg text-center my-3 font-bold ">
      <div>{month}</div>
      <div>{year}</div>
      <div className="text-3xl">{day}</div>
    </div>
  );
}

export default ItemDate;
