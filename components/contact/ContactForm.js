import React, { useRef, useState, useEffect } from 'react';
import classes from './ContactForm.module.css';
import Notification from '../ui/notification';

export default function ContactForm() {
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const textInputRef = useRef();

  const [requestStatus, setRequestStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null);
        setRequestError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredText = textInputRef.current.value;

    if (
      !enteredEmail ||
      !enteredEmail.includes('@') ||
      !enteredName ||
      !enteredText
    ) {
      alert('All fields are required!');
      return;
    }

    setRequestStatus('pending');
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        name: enteredName,
        text: enteredText,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return res.json().then((error) => {
          throw new Error(error.message);
        });
      })
      .then((data) => {
        console.log(data.return);
        setRequestStatus('success');
        emailInputRef.current.value = '';
        nameInputRef.current.value = '';
        textInputRef.current.value = '';
      })
      .catch((error) => {
        console.log(error.message);
        setRequestError(error.message);
        setRequestStatus('error');
      });
  };

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending',
      message: 'Your message is being sent...',
    };
  }
  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Sent',
      message: 'Your message has been sent',
    };
  }
  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error!',
      message: requestError,
    };
  }

  return (
    <section className={classes.contact} onSubmit={submitHandler}>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <h1>How can I help you?</h1>
      <form className={classes.form}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" ref={emailInputRef} required />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" ref={nameInputRef} required />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your message</label>
          <textarea
            id="message"
            rows="5"
            ref={textInputRef}
            required
          ></textarea>
          <div className={classes.actions}>
            <button>Send message</button>
          </div>
        </div>
      </form>
    </section>
  );
}
