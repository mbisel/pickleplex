import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../media/outlined-pickleball.png';
import '../styles/NavHeader.scss'
import '../styles/App.scss'


function NavHeader() {
  return (
    <>
        <Navbar key="lg" bg="light" expand="lg" className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><img src={logo}/>PicklePlex</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"lg"}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${"lg"}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${"lg"}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${"lg"}`}>
                <Navbar.Brand href="#"><h1>PicklePlex</h1></Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">FAQs</Nav.Link>
                  <Nav.Link href="#action2">Event Calendar</Nav.Link>
                  <Nav.Link href="#action2">Contact Us</Nav.Link>
                </Nav>
                  <Button type="button" class="button" variant="outline-success">Reserve a Court</Button>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
    </>
  );
}

export default NavHeader;