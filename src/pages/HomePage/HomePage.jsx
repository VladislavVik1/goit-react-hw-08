import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <section className={css.section}>
      <h1 className={css.title}>Welcome to Contact Book</h1>
      <p className={css.text}>Keep your contacts organized and secure.</p>
    </section>
  );
};

export default HomePage;
