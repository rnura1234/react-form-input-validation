import React, { useState } from 'react';

const SimpleInput = (props) => {
   const [enteredName, setEnteredName] = useState('');
   const [nameIsTouched, setNameIsTouched] = useState(false);

   const [enteredEmail, setEnteredEmail] = useState('');
   const [emailIsTouched, setEmailIsTouched] = useState(false);
   // const [formIsValid, setFormIsValid] = useState(false);

   const nameIsValid = enteredName.trim() !== '';
   const nameInputInvalid = !nameIsValid && nameIsTouched;

   const emailIsValid = enteredEmail.trim().includes('@');
   const emailInputInvalid = !emailIsValid && emailIsTouched;

   let formIsValid = false;
   if (nameIsValid && emailIsValid) {
      formIsValid = true;
   }

   const nameChangeHandler = (event) => {
      setEnteredName(event.target.value);
   };
   const emailChangeHandler = (event) => {
      setEnteredEmail(event.target.value);
   };
   const nameBlurHandler = (event) => {
      setNameIsTouched(true);
   };
   const emailBlurHandler = (event) => {
      setEmailIsTouched(true);
   };

   const formSubmitHandler = (event) => {
      event.preventDefault();
      setNameIsTouched(true);
      setEmailIsTouched(true);
      if (!nameIsValid && !emailIsValid) {
         return;
      }
      console.log(enteredName);
      console.log(enteredEmail);
      setEnteredName('');
      setEnteredEmail('');
      setNameIsTouched(false);
      setEmailIsTouched(false);
   };

   const nameInputClass = nameInputInvalid
      ? 'form-control invalid'
      : 'form-control';
   const emailInputClass = emailInputInvalid
      ? 'form-control invalid'
      : 'form-control';

   return (
      <form onSubmit={formSubmitHandler}>
         <div className={nameInputClass}>
            <label htmlFor='name'>Your Name</label>
            <input
               type='text'
               id='name'
               value={enteredName}
               onChange={nameChangeHandler}
               onBlur={nameBlurHandler}
            />
            {nameInputInvalid && (
               <p className='error-text'>name field must valid</p>
            )}
         </div>
         <div className={emailInputClass}>
            <label htmlFor='email'>Your Email</label>
            <input
               type='email'
               id='email'
               value={enteredEmail}
               onChange={emailChangeHandler}
               onBlur={emailBlurHandler}
            />
            {emailInputInvalid && (
               <p className='error-text'>email must have @ </p>
            )}
         </div>

         <div className='form-actions'>
            <button disabled={!formIsValid}>Submit</button>
         </div>
      </form>
   );
};

export default SimpleInput;
