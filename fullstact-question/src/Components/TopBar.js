import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <Navbar className='navbar' fixed="top">
      <Container fluid>
        <Link to='/'>
          <Navbar.Brand>
            <img
              src="assets/logo.jpg"
              width="86"
              height="86"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
        </Link>
      </Container>
    </Navbar>
  );
}

export default TopBar;
