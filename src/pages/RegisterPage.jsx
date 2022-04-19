import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { sendFetch } from '../helpers/helper';
import { useHistory } from 'react-router-dom';
import Button from '../components/UI/Button/Button';
import Container from '../components/UI/Container/Container';
import FormContainer from '../components/UI/Container/FormContainer';

const initErrors = {
  email: '',
  password: '',
};

function RegisterPage(props) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorObj, setErrorObj] = useState(initErrors);

  useEffect(() => {
    const isErrorsEmpty = Object.values(errorObj).every((el) => el === '');
    if (!isErrorsEmpty) {
      setIsError(true);
    }
  }, [email, password, errorObj]);

  async function submitHandler(e) {
    setIsError(false);
    setErrorObj(initErrors);
    e.preventDefault();

    if (email.trim() === '') {
      setErrorObj((prevState) => ({
        ...prevState,
        email: 'Email cannot be blank',
      }));
    }
    if (password.trim() === '') {
      setErrorObj((prevState) => ({
        ...prevState,
        password: 'Password cannot be blank',
      }));
    }

    const newRegObj = {
      email: email,
      password: password,
    };

    const sendResult = await sendFetch('auth/register', newRegObj);
    localStorage.getItem('token');

    if (sendResult.changes === 1) {
      toast.success('Good stuff! You are successfully registered');
      setTimeout(() => history.push('/login'), 3000);
      history.push('/login');
    }
    if (sendResult.err) {
      toast.error('Oh no, failed to register. Please check your data.');
      setIsError(true);
    }
  }
  return (
    <Container>
      <Toaster toastOptions={{ position: 'bottom-left' }} />
      <FormContainer>
        <h2 className='page-title'>Please register here:</h2>
        <form onSubmit={submitHandler}>
          {isError && (
            <p className='error'>SOMETHING WENT WRONG...Check your form</p>
          )}
          <input
            type='email'
            placeholder='Email address'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {errorObj.email && <p className='error'>{errorObj.email}</p>}
          <input
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {errorObj.password && <p className='error'>{errorObj.password}</p>}
          <Button>Register</Button>
        </form>
      </FormContainer>
    </Container>
  );
}

export default RegisterPage;
