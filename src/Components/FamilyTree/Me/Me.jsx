import React from 'react';
import Special from '../Special/Special';

const Me = ({asset}) => {
    return (
        <div className='border rounded p-1 m-1 bg-indigo-400'>
            <h2 className='text-center'>Me</h2>
            <Special asset={asset}></Special>
        </div>
    );
};

export default Me;