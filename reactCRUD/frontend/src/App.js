
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
// Import from react-router-dom
import {BrowserRouter as Router, Routes,Route, Link} from "react-router-dom";
// Import other React Component
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";
import UserList from "./components/UserList";

function App() {
  return (
     <Router>
      <div className="App">
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/create-user"}
                  className="nav-link">
                  React CRUD App
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/create-user"}
                    className="nav-link">
                    Create User
                  </Link>
                </Nav>
                <Nav>
                  <Link to={"/user-list"}
                    className="nav-link">
                    User List aaaa
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route exact path="/"
                    element={<CreateUser />} />
                  <Route path="/create-user"
                    element={<CreateUser />} />
                  <Route path="/edit-user/:id"
                    element={<EditUser />} />
                  <Route path="/user-list"
                    element={<UserList />} />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
