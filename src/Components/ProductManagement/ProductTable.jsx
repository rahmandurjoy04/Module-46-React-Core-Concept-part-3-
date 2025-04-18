import React from 'react';

const ProductTable = ({products}) => {
    console.log(products);
    return (
        <div className='ml-20'>
            <h3>Products:{products.length}</h3>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,index)=><tr key={index}>
                            <td>{index+1}</td>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>{product.price}</td>
                            <td></td>
                        </tr>)
                    }
                </tbody>
            </table>
            
        </div>
    );
};

export default ProductTable;