import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../app/store'
import { Link } from 'react-router-dom'
import { resetUser } from './usersSlice'
import Navbar from 'react-bootstrap/Navbar'
import { Container, Nav, NavDropdown } from 'react-bootstrap'

export const NavMenu = () => {
  const { activeUser } = useSelector((state: RootState) => state.users)

  const dispatch = useDispatch()

  const userName = activeUser.name.split(' ')
  let grabName = userName[0]

  return (
    <Navbar bg="light" expand="lg" fixed='top'>
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
// <div>
//   <h2>Nav Component</h2>
//   <div style={{ display: 'flex' }}>
//     <p>Welcome {grabName}!</p>
//     <p>---Logo Here---</p>
//     <Link to='/'>
//       <button onClick={() => dispatch(resetUser(activeUser))}>Logout</button>
//     </Link>
//   </div>
// </div>
