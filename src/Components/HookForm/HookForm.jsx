import React from 'react';
import useInputField from '../../hooks/useInputField';




const HookForm = () => {
    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const [password, passwordOnChange] = useInputField('');
    const handleSubmit = e => {
        e.preventDefault();
        console.log('Name:',name,"email:",email,"password:",password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='border mt-2' type="text" defaultValue={name} onChange={nameOnChange} placeholder='Name' />
                <br />
                <input className='border mt-2' onChange={emailOnChange} defaultValue={email} type="email" name="email" id="" placeholder='Your Mail'  />
                <br />
                <input className='border mt-2' type="password" name='password' defaultValue={password} onChange={passwordOnChange} placeholder='Your Password' required />
                <br />
                <input className='border mt-2' type="submit" value="Submit" />
                
                </form>

        </div>
    );
};

export default HookForm;