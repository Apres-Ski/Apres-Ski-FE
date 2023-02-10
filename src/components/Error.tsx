import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

export const Error = () => {
  const usersError = useSelector((state: RootState) => state.users.error)
  const restaurantError = useSelector((state: RootState) => state.restaurants.error)
  
  return (
    // <div>
    //   <h2>Error Component (General)</h2>
    //   <p>There seems to be a problem loading this content. Please return to the Main page</p>
    //   <Link to='/'>
    //     <button>Go Back</button>
    //   </Link>
    // </div>
        <div
          className="modal show"
          style={{ display: 'block', position: 'initial' }}
        >
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
            </Modal.Body>
            <Modal.Footer>
              <Link to='/'><Button variant="secondary">Close</Button></Link>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      )
    }

// Route button to Main page
