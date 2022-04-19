import css from './NotLoggedIn.module.css';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Container from '../Container/Container';

function NotLoggedIn() {
  return (
    <Container>
      <div className={css.NotLoggedIn}>
        <h1>To see our content you need to be a member</h1>
        <p>Please login or register a new account with us ❤️</p>
        <Link to='/login'>
          <Button>Login</Button>
        </Link>
        <Link to='/register'>
          <Button>Register</Button>
        </Link>
      </div>
    </Container>
  );
}

export default NotLoggedIn;
