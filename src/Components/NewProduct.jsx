import React from "react";
import ProductForm from "./ProductForm";

function NewProduct(){
    return(
        <div className="bg-purple-600 rounded-2xl m-auto w-[60%] my-5 py-8 text-center">
            <ProductForm/>
        </div>
    )
}

export default NewProduct;