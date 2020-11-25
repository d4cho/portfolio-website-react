import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';

const NOTIFICATION_MSG = {
  success: `Thanks for reaching out! I'll get back to you shortly.`,
  failed: `Failed to send your message. Please try again later or contact me directly at danielcho91@gmail.com`
};

const Notification = (props) => {
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (props.status === '') {
      setShow(false);
    } else if (props.status === 'success') {
      setShow(true);
      setMessage(NOTIFICATION_MSG.success);
    } else if (props.status === 'failed') {
      setShow(true);
      setMessage(NOTIFICATION_MSG.failed);
    }
  }, [props.status]);

  const transitions = useTransition(show, null, {
    from: { transform: 'translate3d(500px,0,0)' },
    enter: { transform: 'translate3d(0px,0px,0)' },
    leave: { transform: 'translate3d(500px,0,0)' }
  });

  const toggle = () => {
    setShow(false);
    setMessage('');
  };

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props}>
          <div className='Success-notification'>
            {message}
            <div className='Close-button-notifcation' onClick={toggle}>
              &#10005;
            </div>
          </div>
        </animated.div>
      )
  );
};

export default Notification;
