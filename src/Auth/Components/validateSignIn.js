const validate = values => {
  const errors = {}

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

  return errors
}

export default validate
