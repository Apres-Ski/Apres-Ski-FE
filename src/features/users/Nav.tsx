import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../app/store'
import { Link } from 'react-router-dom'
import { resetUser } from './usersSlice'
import Navbar from 'react-bootstrap/Navbar'
import { Button, Container, Nav, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { APP_ROUTES } from '../../utilities/constants'

export const NavMenu = () => {
  const { activeUser } = useSelector((state: RootState) => state.users)
  const dispatch = useDispatch()

  return (
    <Navbar bg="primary" variant="dark" expand="lg" fixed="top">
      <Container>
        <LinkContainer to={APP_ROUTES.LANDING}>
          <Navbar.Brand href="#home">Après Ski ⛷</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">{activeUser.name}</a>
            <Button
              variant="outline-success"
              onClick={() => dispatch(resetUser(activeUser))}
            >
              Logout
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
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
