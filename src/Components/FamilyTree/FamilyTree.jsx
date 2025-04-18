import React, { createContext, useState } from 'react';
import Grandpa from './Grandpa';


// Context Api
export const AssetContext = createContext('');
export const MoneyContext = createContext(0);

const FamilyTree = () => {
    const [money,setMoney]=useState(0);
    const asset = 'Diamond';
    const newAsset = 'Gold';
    return (
        <div className='flex justify-center mt-5'>
            <div className='border bg-blue-300 p-3 rounded'>
                <h2 className='text-center'>Family Tree</h2>
                <h2 className='text-center'>Total Family Money: {money}</h2>
                <MoneyContext value={[money,setMoney]}>
                    <AssetContext.Provider value={newAsset}>
                        <Grandpa asset={asset}></Grandpa>
                    </AssetContext.Provider>
                </MoneyContext>

            </div>

        </div>
    );
};

export default FamilyTree;