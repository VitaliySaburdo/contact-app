import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Container, Title, Form, Label, Button } from './ContactForm.styled';

import TextField from '@mui/material/TextField';

export function ContactForm({ buttonLabel, onSubmit, name, number }) {
  const contacts = useSelector(selectContacts);

  const validationSchema = yup.object({
    name: yup.string('Enter your Name').required('Name is required'),
    number: yup
      .string('Enter your phone number')
      .matches(/^\d+$/, 'Number should only contain numeric values')
      .min(7, 'Number should be of minimum 7 characters length')
      .required('Phone number is required'),
  });

  const formik = useFormik({
    initialValues: {
      name: name || '',
      number: number || '',
    },
    validationSchema: validationSchema,
    onSubmit: ({ name, number }) => {
      if (isNumberInContact) {
        alert(`${name} is already in contacts`);
      } else {
        onSubmit({ name, number });
        formik.resetForm();
      }
    },
  });
  const isNumberInContact = contacts.find(
    contact =>
      contact.number.toLocaleLowerCase() ===
      formik.values.number.toLocaleLowerCase()
  );

  return (
    <Container>
      <Title>Phonebook</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Label>
          <TextField
            sx={{ height: 65 }}
            fullWidth
            size="small"
            type="text"
            name="name"
            label="Name"
            placeholder="Please enter contact name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            onClick={event => event.stopPropagation()}
          />
        </Label>
        <Label>
          <TextField
            sx={{ height: 65 }}
            fullWidth
            size="small"
            type="tel"
            name="number"
            label="Phone number"
            placeholder="Enter a phone number"
            value={formik.values.number}
            onChange={formik.handleChange}
            error={formik.touched.number && Boolean(formik.errors.number)}
            helperText={
              formik.touched.number && formik.errors.number
                ? formik.errors.number
                : ' '
            }
            onClick={event => event.stopPropagation()}
          />
        </Label>
        <Button type="submit" buttonLabel={buttonLabel}>
          {buttonLabel}
        </Button>
      </Form>
    </Container>
  );
}

ContactForm.prototype = {
  name: PropTypes.string,
  number: PropTypes.number,
  onSubmit: PropTypes.func,
};
