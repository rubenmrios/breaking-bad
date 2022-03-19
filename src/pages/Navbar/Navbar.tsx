import { Navbar,Container,Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import {ButtonLanguaje} from '../components/buttons/ButtonLanguaje'
import './navbar.css'
const Navigate = () => {
   
  return (
    <>
    <Navbar bg="none" expand="lg" variant="dark">
  <Container>
    <Navbar.Brand ><img className="logo" src="/images/Breaking_Bad_logo.png" alt="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Link to={"/"} >Home</Link>
        <Link to={"/users"}>Users</Link>
      </Nav>
      <ButtonLanguaje/>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
};

export { Navigate };