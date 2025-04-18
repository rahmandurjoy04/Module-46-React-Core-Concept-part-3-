import React from 'react';
import Me from './Me/Me';
import Brother from './Me/Brother/Brother';
import Sister from './Sister/Sister';

const Dad = ({asset}) => {
    return (
        <div className='border rounded p-1 m-1 bg-teal-300'>
            <h3 className='text-center'>Dad</h3>
            <section className='flex'>
                <Me asset={asset}></Me>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Dad;