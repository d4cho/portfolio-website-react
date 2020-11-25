import React, { useState } from 'react';
import Form from './sections/Form';
import Notification from './sections/Notification';

const ContactPage = () => {
  const [notificationStatus, setNotificationStatus] = useState('');
  const handleNotification = (status) => {
    console.log('status', status);
    setNotificationStatus(status);
  };

  return (
    <div className='Background-contact-page'>
      <div className='Content-contact-page'>
        <span className='Title-contact-page'>
          <span className='Text-animated-contact-page'>C</span>
          <span className='Text-animated-contact-page'>o</span>
          <span className='Text-animated-contact-page'>n</span>
          <span className='Text-animated-contact-page'>t</span>
          <span className='Text-animated-contact-page'>a</span>
          <span className='Text-animated-contact-page'>c</span>
          <span className='Text-animated-contact-page'>t</span>
          <span className='Text-animated-contact-page'>&nbsp;</span>
          <span className='Text-animated-contact-page'>m</span>
          <span className='Text-animated-contact-page'>e</span>
        </span>
        <p className='Blurb-contact-page'>
          Feel free to{' '}
          <a href='mailto:danielcho91@gmail.com' style={{ color: '#08fdd8' }}>
            email me
          </a>
          . If you have other requests or questions, don't hesitate to contact
          me using the form below.
        </p>
        <div>
          <Form refreshFunction={handleNotification} />
        </div>
      </div>
      <div className='Map-contact-page'>
        <Notification status={notificationStatus} />
      </div>
    </div>
  );
};

export default ContactPage;
