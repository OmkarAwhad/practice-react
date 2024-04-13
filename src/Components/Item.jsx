import React from "react";
import ItemProduct from "./ItemProduct.jsx";
import ItemDate from "./ItemDate.jsx";
import Card from "./Card.jsx";

const Item = (props) => {
    return(
        <div className="flex flex-col gap-5 bg-green-400 w-[30%] py-16 rounded-lg m-auto">
            <ItemProduct
                title  = {props.products[0].name} 
                amount = {props.products[0].amount} 
                date   = {props.products[0].date}
            ></ItemProduct>
            <ItemProduct
                title  = {props.products[1].name} 
                amount = {props.products[1].amount} 
                date   = {props.products[1].date}
            ></ItemProduct>
            <ItemProduct
                title  = {props.products[2].name} 
                amount = {props.products[2].amount} 
                date   = {props.products[2].date}
            ></ItemProduct>
            <ItemProduct
                title  = {props.products[3].name} 
                amount = {props.products[3].amount}
                date   = {props.products[3].date}
            ></ItemProduct>

        </div>
    )
}

export default Item;