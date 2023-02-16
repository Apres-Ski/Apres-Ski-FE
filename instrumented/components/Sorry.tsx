import { Button } from 'react-bootstrap'
import { Filter } from '../features/filters/Filter'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../app/store'
import { resetFilters } from '../features/filters/filtersSlice'
import React from 'react'

export const Sorry = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div>
      <p className='mt-4'>No matches for this criteria. Please refine your selections and try again.</p>
      <Button
          variant="green-accent"
          onClick={handleShow}
          className="me-2 m-3"
        >
          Change Filters
      </Button>
      <Button 
        variant="green-accent"
        onClick={() => dispatch(resetFilters(null))}
        className="me-2 m-3">Reset Filters
      </Button>
      <Filter show={show} handleClose={handleClose} />
    </div>
  )
}
