import React, { useState } from "react";
import Card from "./Card.jsx";
import ItemDate from "./ItemDate.jsx";

function ItemProduct(props) {

    let [title, setTitle] = useState(props.title);

    function clickHandler(){
        setTitle("Popcorn")
        console.log("Clicked")
    }

    return (
        <div className="flex justify-between bg-red-500 px-4 py-2 m-auto rounded-lg overflow-y-auto  w-[90%]">
            <ItemDate date={props.date} />

            <div className="text-white font-bold pr-4 text-3xl text-center flex flex-col justify-center items-center">
                <h2>{title}</h2>
            </div>

            <div className="bg-green-200 h-[10%] py-4 px-3 font-bold rounded-md flex justify-center items-center my-auto border-green">
                <button onClick={clickHandler} >Add to Cart</button>
            </div>
        </div>
  );
}

export default ItemProduct;
