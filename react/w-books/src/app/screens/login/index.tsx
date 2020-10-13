import React from 'react';
import { useForm } from 'react-hook-form';

import woloxLogo from 'app/assets/wolox.png';
import { USER_FIELDS } from 'constants/login';

import styles from './styles.module.scss';

interface InputsForm {
  [firstName: string]: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

function Login() {
  const { register, handleSubmit } = useForm<InputsForm>();

  const onSubmit = (data: InputsForm) => {
    const result = {
      user: {
        email: data[USER_FIELDS.email],
        password: data[USER_FIELDS.password],
        // eslint-disable-next-line @typescript-eslint/camelcase
        password_confirmation: data[USER_FIELDS.passwordConfirmation],
        // eslint-disable-next-line @typescript-eslint/camelcase
        first_name: data[USER_FIELDS.firstName],
        // eslint-disable-next-line @typescript-eslint/camelcase
        last_name: data[USER_FIELDS.lastName],
        locale: 'en'
      }
    };
    // TODO
    console.log(result);
  };

  return (
    <form className={`column ${styles.loginContainer}`} onSubmit={handleSubmit(onSubmit)}>
      <img className={styles.mainLogo} src={woloxLogo} />
      <label className={styles.label}>Nombre</label>
      <input name={USER_FIELDS.firstName} className={styles.input} ref={register} />
      <label className={styles.label}>Apellido</label>
      <input name={USER_FIELDS.lastName} className={styles.input} ref={register} />
      <label className={styles.label}>Email</label>
      <input name={USER_FIELDS.email} className={styles.input} type="email" ref={register} />
      <label className={styles.label}>Password</label>
      <input name={USER_FIELDS.password} className={styles.input} type="password" ref={register} />
      <label className={styles.label}>Confirmación de Password</label>
      <input
        name={USER_FIELDS.passwordConfirmation}
        className={styles.input}
        type="password"
        ref={register}
      />
      <button className={styles.signupButton} type="submit">
        Sign Up
      </button>
      <hr className={styles.separator} />
      <button className={styles.loginButton} type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;
