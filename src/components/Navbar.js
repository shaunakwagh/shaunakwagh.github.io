
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


function Navigationbar(){
    return(

    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Nav expand="xl" className="me-auto">
            <Nav.Link href="#about">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#certificates">Certificates</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    );





}
export default Navigationbar;