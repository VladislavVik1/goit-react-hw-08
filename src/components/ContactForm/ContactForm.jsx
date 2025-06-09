import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import css from './ContactForm.module.css';

const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  number: Yup.string().required('Required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, actions) => {
    const isExist = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );

    if (isExist) {
      alert(`${values.name} is already in contacts`);
      return;
    }

    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Name
          <Field type="text" name="name" />
          <ErrorMessage component="div" name="name" className={css.error} />
        </label>
        <label className={css.label}>
          Number
          <Field type="tel" name="number" />
          <ErrorMessage component="div" name="number" className={css.error} />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;