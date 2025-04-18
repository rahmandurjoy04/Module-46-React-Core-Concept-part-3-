import React from 'react';

const FormAction = () => {
    const handleFormAction=(formData)=>{
        console.log(formData.get('name'));
        console.log(formData.get('email'));
    }
    return (
        <div >
           <form className='flex flex-col justify-center items-center' action={handleFormAction}>
           <input className='border' type="text" name='name' placeholder='Your Name' />
            <br />
            <input className='border mt-2' type="email" name="email" id="" placeholder='Your Mail' />
            <br />
            <input className='border p-2' type="submit" value="Submit" />
            
           </form>
        </div>
    );
};

export default FormAction;