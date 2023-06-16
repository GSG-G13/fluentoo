import * as yup from 'yup';

const SignupSchema = yup.object().shape({
  email: yup.string().email({ fieldName: 'email', msg: 'Must be a valid email' }).required({ fieldName: 'email', msg: 'Email field is required' }),
  username: yup.string().max(10, { fieldName: 'userName', msg: 'User name must be at most 10 characters' }).required({ fieldName: 'userName', msg: 'User name field is required' }),
  password: yup.string().min(8, { fieldName: 'password', msg: 'Password must be at least 8 characters' }).required({ fieldName: 'password', msg: 'Password field is required' }),
});

export default SignupSchema;
