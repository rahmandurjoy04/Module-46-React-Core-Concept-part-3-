import React, { useContext } from 'react';
import { AssetContext } from '../FamilyTree';

const Special = ({asset}) => {
    const newAsset=useContext(AssetContext);
    console.log(newAsset);
    return (
        <div className='border rounded p-1 bg-teal-50'>
            <h3 className='text-center'>Special</h3>
            <p className='bg-emerald-200 p-1 rounded border'>{asset}</p>
            <p className='bg-emerald-200 p-1 m-1 rounded border'>{newAsset}</p>
        </div>
    );
};

export default Special;