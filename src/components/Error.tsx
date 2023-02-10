import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const Error = () => {

  return (
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
            <Modal.Title>Error</Modal.Title>
  
          <Modal.Body>
            <p>404 Page Not Found</p>
          </Modal.Body>
  
          <Modal.Footer className='d-flex justify-content-center'>
            <Link to='/'><Button variant='primary'>Close</Button></Link>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    )
    // <div>
    //   <h2>Error Component (General)</h2>
    //   <p>There seems to be a problem loading this content. Please return to the Main page</p>
    //   <Link to='/'>
    //     <button>Go Back</button>  
    //   </Link>
    // </div>
}

// Route button to Main page