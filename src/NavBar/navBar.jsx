import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar fixed="top" bg="danger" variant="dark" >
        <Container>
          <Navbar.Brand href="#">Currency Converter</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Current Rates</Nav.Link>
            <Nav.Link href="/conversions">Conversions</Nav.Link>
          </Nav>
        </Container>
      </Navbar>      
      
    </>
  );
}

export default NavBar;