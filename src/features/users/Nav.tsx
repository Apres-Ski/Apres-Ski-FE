import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { resetUser } from './usersSlice'
import Navbar from 'react-bootstrap/Navbar'
import { Button, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { APP_ROUTES } from '../../utilities/constants'

export const NavMenu = () => {
  const { activeUser } = useSelector((state: RootState) => state.users)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <Navbar bg="custom-color" variant="dark" expand="lg" fixed="top">
      <Container>
        <LinkContainer to={APP_ROUTES.LANDING}>
          <Navbar.Brand href="#home">Après Ski ⛷</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Navbar.Text>
              Signed in as:{' '}
              <Navbar.Text className="fw-bold text-decoration-underline text-white">
                {activeUser.name}
              </Navbar.Text>
            </Navbar.Text>
            <Button
              className="ms-4"
              size="sm"
              variant="outline-dark"
              onClick={() => dispatch(resetUser(activeUser))}
            >
              Logout
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
