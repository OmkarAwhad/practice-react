import React, { useState } from "react";

function ProductForm(){

    const [fullProduct,setfullProduct] = useState({
        title:'',
        date:''
    })
    
    function titleChangeHandler(event){
        setfullProduct(prev =>{
            return {...prev, title:event.target.value};
        })
    }
    function dateChangeHandler(event){
        setfullProduct(prev => {
            return {...prev, date: event.target.value};
        })
    }

    function submitData(event){
        event.preventDefault();

        const productData ={
            title : fullProduct.title,
            date : fullProduct.date
        }

        console.log(productData)

        setfullProduct({
            title:'',
            date:''
        });
    }

    return(
        <form className="flex flex-col gap-4 text-xl text-white ">
            <div>
                <label>Title </label>
                <input onChange={titleChangeHandler} value={fullProduct.title} className="text-[#605f5f] px-3 rounded-xl mx-2 outline-purple-700" type="text"></input>
            </div>
            <div>
                <label>Date </label>
                <input onChange={dateChangeHandler} value={fullProduct.date} className="text-[#605f5f] px-3 rounded-xl mx-2 outline-purple-700" type="date" min='2000-01-01' max='2023-12-31'></input>
            </div>
            <div>
                <button onClick={submitData} className="bg-purple-800 px-3 py-2 rounded-lg " type="submit">Add</button>
            </div>
        </form>
    )
}

export default ProductForm; 