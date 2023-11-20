import Link from 'next/link';
import styles from './Register.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';

const RegisterView = () => {
 const [isLoading, isLoadingSet] = useState(false);
 const [error, errorSet] = useState('');
 const { push } = useRouter();
 const handleSubmit = async (event: any) => {
  isLoadingSet(true);
  errorSet('');
  event.preventDefault();
  const data = {
   email: event.target.email.value,
   fullname: event.target.fullname.value,
   password: event.target.password.value,
  };
  const result = await fetch('/api/register', {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify(data),
  });

  if (result.status === 200) {
   event.target.reset();
   isLoadingSet(false);
   push('/auth/login');
  } else {
   isLoadingSet(false);
   errorSet(result.status === 400 ? 'Email already exists' : 'Something went wrong');
  }
 };
 return (
  <div className={styles.register}>
   <h1 className={styles.register__title}>Register</h1>
   {error && <p className={styles.register__error}> {error}</p>}
   <div className={styles.register__form}>
    <form onSubmit={handleSubmit}>
     <div className={styles.register__form__item}>
      <label htmlFor='email' className={styles.register__form__item__label}>
       Email
      </label>
      <input type='email' id='email' name='email' placeholder='Email' className={styles.register__form__item__input} />
     </div>
     <div className={styles.register__form__item}>
      <label htmlFor='fullname' className={styles.register__form__item__label}>
       Fullname
      </label>
      <input type='text' id='fullname' name='fullname' placeholder='Fullname' className={styles.register__form__item__input} />
     </div>
     <div className={styles.register__form__item}>
      <label htmlFor='password' className={styles.register__form__item__label}>
       Password
      </label>
      <input type='password' id='password' name='password' placeholder='Password' className={styles.register__form__item__input} />
     </div>
     <button type='submit' className={styles.register__form__item__button} disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Register'}
     </button>
    </form>
   </div>
   <p className={styles.register__link}>
    Have an account ? Sign in <Link href='/auth/login'>here</Link>
   </p>
  </div>
 );
};
export default RegisterView;
