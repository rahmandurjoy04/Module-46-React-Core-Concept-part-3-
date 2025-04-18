import React from 'react';
import Dad from './Dad';
import Uncle from './Uncle/Uncle';
import Aunt from './Aunt/Aunt';

const Grandpa = ({asset}) => {
    return (
        <div className='bg-amber-100 p-1 rounded'>
            <h3 className='text-center'>Grandpa</h3>
            <section className='flex'>
                <Dad asset={asset}></Dad>
                <Uncle></Uncle>
                <Aunt></Aunt>
            </section>
        </div>
    );
};

export default Grandpa;