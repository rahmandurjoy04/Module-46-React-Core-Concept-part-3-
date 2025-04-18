import React, { use } from 'react';
import { MoneyContext } from '../../FamilyTree';

const Brother = () => {
    const [money,setMoney]=use(MoneyContext);
    return (
        <div className='border rounded p-1 m-1 bg-indigo-400'>
            <h2>Brother</h2>
            <button onClick={()=>setMoney(money+1000)} className='btn btn-xs'>Add $1000</button>
        </div>
    );
};

export default Brother;