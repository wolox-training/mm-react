import React from 'react';
import { useForm } from 'react-hook-form';

import woloxLogo from '../../assets/wolox.png';

import stylesLogin from './styles.module.scss';

type InputsForm = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

function Login() {
  const { register, handleSubmit } = useForm<InputsForm>();

  function handleSubmitForm(data: any) {
    const result = {
      user: {
        email: data.email,
        password: data.password,
        // eslint-disable-next-line @typescript-eslint/camelcase
        password_confirmation: data.passwordConfirmation,
        // eslint-disable-next-line @typescript-eslint/camelcase
        first_name: data.firstName,
        // eslint-disable-next-line @typescript-eslint/camelcase
        last_name: data.lastName,
        locale: 'en'
      }
    };
    console.log(result);
  }

  const onSubmit = handleSubmitForm;

  return (
    <form className={stylesLogin['login-container']} onSubmit={handleSubmit(onSubmit)}>
      <img className={stylesLogin['main-logo']} src={woloxLogo} />
      <label className={stylesLogin.label}>Nombre</label>
      <input name="firstName" className={stylesLogin.input} ref={register} />
      <label className={stylesLogin.label}>Apellido</label>
      <input name="lastName" className={stylesLogin.input} ref={register} />
      <label className={stylesLogin.label}>Email</label>
      <input name="email" className={stylesLogin.input} type="email" ref={register} />
      <label className={stylesLogin.label}>Password</label>
      <input name="password" className={stylesLogin.input} type="password" ref={register} />
      <label className={stylesLogin.label}>Confirmación de Password</label>
      <input name="passwordConfirmation" className={stylesLogin.input} type="password" ref={register} />
      <button className={stylesLogin['signup-button']} type="button">
        Sign Up
      </button>
      <hr />
      <button className={stylesLogin['login-button']} type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;
