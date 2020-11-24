import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import apiKeys from '../../../API_KEYS';
import BarLoader from 'react-spinners/BarLoader';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        apiKeys.SERVICE_ID,
        apiKeys.TEMPLATE_ID,
        event.currentTarget, // need to put event.currentTarget for emailjs to work!
        apiKeys.USER_ID
      )
      .then(
        (result) => {
          console.log('result', result.text);
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
          setIsLoading(false);
        },
        (error) => {
          console.log('error', error.text);
        }
      );
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
    <form className='Container-form' onSubmit={onSubmit}>
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
      {isLoading ? (
        <div className='Submit-loading-form'>
          <BarLoader height={8} width={105} color={'#08fdd8'} />
        </div>
      ) : (
        <input className='Submit-button-form' type='submit' value='Send' />
      )}
    </form>
  );
};

export default Form;
