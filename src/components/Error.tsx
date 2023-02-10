import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Error = ({ message }: { message: string}) => {

  return (
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
            <Modal.Title className='text-danger'>Error</Modal.Title>
  
          <Modal.Body>
            <p>{message}</p>
          </Modal.Body>
  
          <Modal.Footer className='d-flex justify-content-center'>
            <Link to='/'><Button variant='primary'>Close</Button></Link>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    )
}

