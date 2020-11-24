import React, { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.log(name, email, subject, message);
  };

  const handleChange = (event) => {
    if (event.currentTarget.name === 'name') {
      setName(event.currentTarget.value);
    } else if (event.currentTarget.name === 'email') {
      setEmail(event.currentTarget.value);
    } else if (event.currentTarget.name === 'subject') {
      setSubject(event.currentTarget.value);
    } else if (event.currentTarget.name === 'message') {
      setMessage(event.currentTarget.value);
    }
  };

  return (
    <form className='Container-form' onSubmit={handleSubmit}>
      <div className='Name-email-container'>
        <div className='Input-container-form'>
          <input
            className='Input-form'
            name='name'
            type='text'
            placeholder='Name'
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className='Input-container-form'>
          <input
            className='Input-form'
            name='email'
            type='email'
            placeholder='Email'
            value={email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className='Input-container-form'>
        <input
          className='Input-form'
          name='subject'
          type='text'
          placeholder='Subject'
          value={subject}
          onChange={handleChange}
        />
      </div>
      <div className='Input-container-form'>
        <textarea
          className='Input-form-message'
          name='message'
          type='text'
          placeholder='Message'
          value={message}
          onChange={handleChange}
        />
      </div>
      <input className='Submit-button-form' type='submit' value='Send' />
    </form>
  );
};

export default Form;
