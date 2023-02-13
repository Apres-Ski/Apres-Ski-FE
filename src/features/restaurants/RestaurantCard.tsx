import { CleanedRestaurantsState } from '../../utilities/interfaces'
import { useSelector, useDispatch } from 'react-redux'
import type { AppDispatch, RootState } from '../../app/store'
import { selectRestaurant } from './restaurantsSlice'
import { DetailModal } from './DetailModal'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

export const RestaurantCard = ({
  restaurant,
}: {
  restaurant: CleanedRestaurantsState
}) => {
  const dispatch = useDispatch<AppDispatch>()
  const [show, setShow] = useState(false)
  const formattedVibes = restaurant.vibes.join(', ')

  const handleClose = () => setShow(false)

  const handleClick = () => {
    dispatch(selectRestaurant(restaurant))
    setShow(true)
  }

  return (
    <div className="m-4">
      <div className="card" style={{ maxWidth: '500' }}>
        <div className="row g-0">
          <div className="col-sm-5">
            <img className="card-img-top h-100" src={restaurant.coverImg} />
          </div>
          <div className="col-sm-7">
            <div className="card-body">
              <p>{restaurant.name}</p>
              <p>Vibe: {formattedVibes}</p>
              <p>Distance: .25m</p>
              <p>PLACEHOLDER FOR VIBE BADGES</p>
              <button
                onClick={() => handleClick()}
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target={restaurant.id}
              >
                Show Details
              </button>
              <Modal show={show} onHide={handleClose} backdrop="static">
                <Modal.Header className="d-flex justify-content-center"></Modal.Header>
                <Modal.Body className="d-flex justify-content-center">
                  {<DetailModal />}
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center">
                  <Button onClick={() => handleClose()} variant="primary">
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
