import { Link } from 'react-router-dom';
import Button from '../components/UI/Button/Button';
import Container from '../components/UI/Container/Container';

function NotFound() {
  return (
    <Container>
      <h1>Page you are looking for is not found</h1>

      <Link to={'/home'}>
        <Button>Home</Button>
      </Link>
    </Container>
  );
}

export default NotFound;
