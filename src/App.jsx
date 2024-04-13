import React from "react";
import "./App.css";
import Card from "./Components/Card";
import Item from "./Components/Item";
import ItemProduct from "./Components/ItemProduct";
import NewProduct from "./Components/NewProduct";
import ProductForm from "./Components/ProductForm";

function App() {
  const info = [
    {
      id: "p1",
      name: "Nirma",
      amount: 100,
      date: new Date(2021, 8, 10),
    },
    {
      id: "p2",
      name: "Ariel",
      amount: 100,
      date: new Date(2001, 7, 15),
    },
    {
      id: "p3",
      name: "Tide",
      amount: 100,
      date: new Date(2004, 4, 30),
    },
    {
      id: "p4",
      name: "Rin",
      amount: 100,
      date: new Date(2011, 1, 29),
    },
  ];

  return (
    <div className="w-full h-screen ">
      <NewProduct/>
      <Item products={info} />
    </div>
  );
}

export default App;
