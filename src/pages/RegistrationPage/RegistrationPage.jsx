import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import css from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>Register</h2>
      <RegistrationForm />
    </section>
  );
};

export default RegistrationPage;
