import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';
import { sendFetchWithToken } from '../helpers/helper';
import Button from '../components/UI/Button/Button';
import Container from '../components/UI/Container/Container';
import FormContainer from '../components/UI/Container/FormContainer';

const initErrors = {
  title: '',
  description: '',
};

function AddPage() {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isError, setIsError] = useState(false);
  const [errorObj, setErrorObj] = useState(initErrors);

  useEffect(() => {
    const isErrorsEmpty = Object.values(errorObj).every((el) => el === '');
    if (!isErrorsEmpty) {
      setIsError(true);
    }
  }, [title, description, errorObj]);

  async function submitHandler(e) {
    setIsError(false);
    setErrorObj(initErrors);
    e.preventDefault();

    if (title.trim() === '') {
      setErrorObj((prevState) => ({
        ...prevState,
        title: 'Title cannot be left blank',
      }));
    }
    if (description.trim() === '') {
      setErrorObj((prevState) => ({
        ...prevState,
        description: 'Description cannot be left blank',
      }));
    }

    const newObj = {
      title: title,
      description: description,
    };

    const sendResult = await sendFetchWithToken('content/skills', newObj);

    if (sendResult.msg === 'Added new skill to account') {
      toast.success('Congrats! New skill has been successfully added.');
      setTimeout(() => history.push('/home'), 3000);
    }
    if (sendResult.err) {
      toast.error('Something went wrong... Please try again.');
      setTimeout(() => history.push('/add'), 3000);
      setIsError(true);
    }
  }
  return (
    <Container>
      <Toaster toastOptions={{ position: 'bottom-left' }} />
      <FormContainer>
        <form onSubmit={submitHandler}>
          {isError && <p className='error'>Please double-check the form</p>}
          <h2 className='page-title'>Add your skills</h2>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type='text'
            placeholder='Title'
          />
          {errorObj.title && <p className='error'>{errorObj.title}</p>}
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Description'
          />
          {errorObj.description && (
            <p className='error'>{errorObj.description}</p>
          )}
          <Button>Submit</Button>
        </form>
      </FormContainer>
    </Container>
  );
}

export default AddPage;
