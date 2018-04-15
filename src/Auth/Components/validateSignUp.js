const validate = values => {
  const errors = {}

  if (!values.name) {
    errors.name = 'The name is required'
  } else if (values.name.length < 5) {
    errors.name = 'Must be at least 5 characters'
  } else if (values.name.length > 10) {
    errors.name = 'Must be less than 10 characters'
  }

  if (!values.email) {
    errors.email = 'The email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'The email is not valid'
  }

  if (!values.password) {
    errors.password = 'The password is required'
  } else if (values.password.length < 6) {
    errors.password = 'Must be at least 5 characters'
  } else if (values.password.length > 15) {
    errors.password = 'Must be less than 10 characters'
  }

  if (!values.confirmation) {
    errors.confirmation = 'The confirmation is required'
  } else if (values.confirmation !== values.password) {
    errors.confirmation = 'Passwords do not match'
  }

  return errors
}

export default validate
