import { Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { signOut } from "../redux/UserReducer";

export const AppNav = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const signOutUser = () => {
    dispatch(signOut());
    history.push("/");
  };

  return (
    <Navbar bg="info" varient="dark" expand="lg">
      <Navbar.Brand href="#home" className="text-light" class="dropbtn">
        EBMS
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home">
            <div class="dropdown">
              <button class="dropbtn">Home</button>
              <div class="dropdown-content">
                <Link to="/home">Home Page</Link>
              </div>
            </div>
          </Nav.Link>

          <Nav.Link as={Link}>
            <div class="dropdown">
              <button class="dropbtn">Customer</button>
              <div class="dropdown-content">
                <Link to="/customer-upsert">Customer Register</Link>
                <Link to="/customer-list">Customer List</Link>
                <Link to="/find-customer">Find Customer</Link>
              </div>
            </div>
          </Nav.Link>

          <Nav.Link as={Link}>
            <div class="dropdown">
              <button class="dropbtn">Customer</button>
              <div class="dropdown-content">
                <Link to="/customer-upsert">Customer Register</Link>
                <Link to="/customer-list">Customer List</Link>
                <Link to="/find-customer">Find Customer</Link>
              </div>
            </div>
          </Nav.Link>

          <Nav.Link as={Link} to="/customer-upsert">
            <div class="dropdown">
              <button class="dropbtn">Reading</button>
              <div class="dropdown-content">
                <Link to="/reading-upsert">Reading Page</Link>
              </div>
            </div>
          </Nav.Link>

          <Nav.Link as={Link} to="/customer-upsert">
            <div class="dropdown">
              <button class="dropbtn">Bill</button>
              <div class="dropdown-content">
                <Link to="/bill-upsert">Bill Page</Link>
              </div>
            </div>
          </Nav.Link>

          <Nav.Link as={Link}>
            <div class="dropdown">
              <Link to="/user-signin">
                <button class="dropbtn">Log Out</button>
              </Link>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
