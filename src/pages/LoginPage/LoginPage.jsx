import LoginForm from '../../components/LoginForm/LoginForm';
import css from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>Login</h2>
      <LoginForm />
    </section>
  );
};

export default LoginPage;
