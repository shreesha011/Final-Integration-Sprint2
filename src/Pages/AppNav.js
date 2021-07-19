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
        <h4>EBMS</h4>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/home">
            <div class="dropdown">
              {/* <button class="dropbtn">Home</button> */}
              <a class="navbuttons">Home</a>
              <div class="dropdown-content">
                <Link to="/home">
                  <h6>Home Page</h6>
                </Link>
              </div>
            </div>
          </Nav.Link>

          <Nav.Link as={Link}>
            <div class="dropdown">
              {/* <button class="dropbtn">Customer</button> */}
              <a class="navbuttons">Customer</a>
              <div class="dropdown-content">
                <Link to="/customer-upsert">
                  <h6>Customer Register</h6>
                </Link>
                <Link to="/customer-list">
                  <h6>Customer List</h6>
                </Link>
                <Link to="/find-customer">
                  <h6>Find Customer</h6>
                </Link>
              </div>
            </div>
          </Nav.Link>

          <Nav.Link as={Link}>
            <div class="dropdown">
              {/* <button class="dropbtn">Address</button> */}
              <a class="navbuttons">Address</a>
              <div class="dropdown-content">
                <Link to="/address">
                  <h6>Add address</h6>
                </Link>
              </div>
            </div>
          </Nav.Link>

          <Nav.Link as={Link}>
            <div class="dropdown">
              {/* <button class="dropbtn">Connection</button> */}
              <a class="navbuttons">Connection</a>
              <div class="dropdown-content">
                <Link to="/connection-upsert">
                  <h6>Add Connection</h6>
                </Link>
                <Link to="/active">
                  <h6>Active Connection</h6>
                </Link>
                <Link to="/inactive">
                  <h6>InActive Connection</h6>
                </Link>
              </div>
            </div>
          </Nav.Link>

          <Nav.Link as={Link} to="/customer-upsert">
            <div class="dropdown">
              {/* <button class="dropbtn">Reading</button> */}
              <a class="navbuttons">Reading</a>
              <div class="dropdown-content">
                <Link to="/reading-upsert">
                  <h6>Reading Page</h6>
                </Link>
              </div>
            </div>
          </Nav.Link>

          <Nav.Link as={Link} to="/customer-upsert">
            <div class="dropdown">
              {/* <button class="dropbtn">Bill</button> */}
              <a class="navbuttons">Bill</a>
              <div class="dropdown-content">
                <Link to="/bill-upsert">
                  <h6>Bill Page</h6>
                </Link>
              </div>
            </div>
          </Nav.Link>

          <Nav.Link as={Link}>
            <div class="dropdown">
              <Link to="/user-signin">
                {/* <button class="dropbtn">Log Out</button> */}
                <a class="navbuttons">Log Out</a>
              </Link>
            </div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
