import React from 'react';
import useInput from '../hooks/use-input';
const BasicForm = (props) => {
   const {
      value: enteredFirstName,
      hasError: firstnameInputHasError,
      valueChangeHandler: firstnameChangeHandler,
      valueBlurHandler: firstnameBlurHandler,
      reset: firstnameReset,
   } = useInput((enteredName) => {
      return enteredName !== '';
   });
   const {
      value: enteredLastName,
      hasError: lastNameInputHasError,
      valueChangeHandler: lastnameChangeHandler,
      valueBlurHandler: lastnameBlurHandler,
      reset: lastnameReset,
   } = useInput((enteredName) => {
      return enteredName !== '';
   });
   const {
      value: enteredEmail,
      hasError: emailInputHasError,
      valueChangeHandler: emailChangeHandler,
      valueBlurHandler: emailBlurHandler,
      reset: emailReset,
   } = useInput((enteredEmail) => {
      return enteredEmail.includes('@');
   });

   const formSubmitHandler = (event) => {
      event.preventDefault();
      console.log(enteredFirstName, enteredLastName, enteredEmail);
      firstnameReset();
      lastnameReset();
      emailReset();
   };
   const firstNameClass = firstnameInputHasError
      ? 'form-control invalid'
      : 'form-control';
   const lastNameClass = lastNameInputHasError
      ? 'form-control invalid'
      : 'form-control';
   const emailClass = emailInputHasError
      ? 'form-control invalid'
      : 'form-control';
   return (
      <form onSubmit={formSubmitHandler}>
         <div className='control-group'>
            <div className={firstNameClass}>
               <label htmlFor='name'>First Name</label>
               <input
                  type='text'
                  id='name'
                  value={enteredFirstName}
                  onChange={firstnameChangeHandler}
                  onBlur={firstnameBlurHandler}
               />
               {firstnameInputHasError && (
                  <p className='error-text'>firstname should be valid</p>
               )}
            </div>
            <div className={lastNameClass}>
               <label htmlFor='name'>Last Name</label>
               <input
                  type='text'
                  id='name'
                  value={enteredLastName}
                  onChange={lastnameChangeHandler}
                  onBlur={lastnameBlurHandler}
               />
               {lastNameInputHasError && (
                  <p className='error-text'>lastname should be valid</p>
               )}
            </div>
         </div>
         <div className={emailClass}>
            <label htmlFor='name'>E-Mail Address</label>
            <input
               type='text'
               id='name'
               value={enteredEmail}
               onChange={emailChangeHandler}
               onBlur={emailBlurHandler}
            />
            {emailInputHasError && (
               <p className='error-text'>email must include @</p>
            )}
         </div>
         <div className='form-actions'>
            <button>Submit</button>
         </div>
      </form>
   );
};

export default BasicForm;
