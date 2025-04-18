import React, { createContext } from 'react';
import Grandpa from './Grandpa';


// Context Api
export const AssetContext = createContext('');

const FamilyTree = () => {
    const asset = 'Diamond';
    const newAsset = 'Gold';
    return (
        <div className='flex justify-center mt-5'>
            <div className='border bg-blue-300 p-3 rounded'>
                <h2 className='text-center'>Family Tree</h2>
                <AssetContext.Provider value={newAsset}>
                    <Grandpa asset={asset}></Grandpa>
                </AssetContext.Provider>
            </div>

        </div>
    );
};

export default FamilyTree;