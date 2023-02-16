import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'
import React from 'react'

export const Error = ({ message }: { message: string}) => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
      >
        <Modal.Header className='d-flex justify-content-center'>
            <Modal.Title className='text-danger'>Error</Modal.Title>
        </Modal.Header>
          <Modal.Body className='d-flex justify-content-center'>
            <p>{message}</p>
          </Modal.Body>
  
          <Modal.Footer className='d-flex justify-content-center'>
            <Link to='/'><Button variant='primary'>Close</Button></Link>
          </Modal.Footer>
      </Modal>
    )
}

