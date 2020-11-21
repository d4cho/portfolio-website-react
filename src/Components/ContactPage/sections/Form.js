import React, { useState } from 'react';

const Form = () => {
  const [val, setVal] = useState('');

  const handleSubmit = () => {};

  const handleChange = () => {};

  return (
    <form className='Container-form' onSubmit={handleSubmit}>
      <div className='Name-email-container'>
        <div className='Input-container-form'>
          <input
            className='Input-form'
            name='name'
            type='text'
            placeholder='Name'
            value={val}
            onChange={handleChange}
          />
        </div>
        <div className='Input-container-form'>
          <input
            className='Input-form'
            name='email'
            type='email'
            placeholder='Email'
            value={val}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className='Input-container-form'>
        <input
          className='Input-form'
          name='subject'
          type='text'
          placeholder='Subject'
          value={val}
          onChange={handleChange}
        />
      </div>
      <div className='Input-container-form'>
        <input
          className='Input-form-message'
          name='message'
          type='text'
          placeholder='Message'
          value={val}
          onChange={handleChange}
        />
      </div>
      <input className='Submit-button-form' type='submit' value='Send' />
    </form>
  );
};

export default Form;
