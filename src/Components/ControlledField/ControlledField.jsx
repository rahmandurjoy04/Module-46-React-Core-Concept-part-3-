import React, { useState } from 'react';

const ControlledField = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [error,setError]=useState('')
    console.log(password);

    const handlePassOnChange = (e)=>{
        // console.log(e.target.value);
        setPassword(e.target.value);
        if(password.length<6){
            setError("Password Must be of at least 6 characters");
        }
        else{
            setError('')
        }
    }

    const handleSubmit =(event)=>{
        event.preventDefault();
        console.log(name,email,password);

    }

    const handleEmailChange = e =>{
        setEmail(e.target.value);
    }
    const handleNameChange = e =>{
        setName(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center'>
                <input className='border mt-2' type="text" onChange={handleNameChange} placeholder='Name' />
                <input className='border mt-2' onChange={handleEmailChange} type="email" name="email" id="" placeholder='Your Mail' required />
                <br />
                <input className='border' type="password" name='password' defaultValue={password} onChange={handlePassOnChange} placeholder='Your Password' required />
                <br />
                <input className='border p-2' type="submit" value="Submit" />

            </form>
            <p className='text-center'><small className='text-red-600'>{error}</small></p>

        </div>
    );
};

export default ControlledField;