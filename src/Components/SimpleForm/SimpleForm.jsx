import React from 'react';

const SimpleForm = () => {
    const handleSubmit = (event)=>{
        event.preventDefault();
        // console.log('Form Submitted');
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='border' name='name' type="text" placeholder='Your Name'/>
                <br />
                <input className='border' type="email" name="email" id="" placeholder='Enter Your Email' />
                <br />
                <input className='btn btn-sm' type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default SimpleForm;