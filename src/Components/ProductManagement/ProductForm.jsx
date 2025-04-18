import React from 'react';

const ProductForm = ({handleAddProduct}) => {
    const handleProductSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const newProduct ={
            name,
            price,
            quantity
        }
        // console.log(newProduct);
        handleAddProduct(newProduct);
    }
    return (
        <div>
            <h3 className='text-xl ml-4'>Add a Product</h3>
            <form onSubmit={handleProductSubmit}>
                <input className='mt-2 p-2 border rounded ml-4' type="text" name='name' placeholder='Product Name:' />
                <br />
                <input className='mt-2 p-2 border rounded ml-4' type="text" name='price' placeholder='Product Price:' />
                <br />
                <input className='mt-2 p-2 border rounded ml-4' type="text" name='quantity' placeholder='Product Quantity:' />
                <br />
                <input className='mt-2 p-2 border rounded ml-4' type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default ProductForm;