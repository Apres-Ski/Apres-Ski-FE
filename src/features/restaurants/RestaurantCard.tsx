import { CleanedRestaurantsState } from '../../utilities/interfaces'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../app/store'
import { selectRestaurant } from './restaurantsSlice'
import { DetailModal } from './DetailModal'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { VibeLabels } from './VibeLabels'
import { DistanceMarkers } from './DistanceMarker'

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
    <div
      id={`card-${restaurant.id}`}
      className="card m-2 mb-3"
      style={{ maxWidth: '240' }}
    >
      <div className="row g-0">
        <div className="col-md-4">
          <img src={restaurant.coverImg} className="card-img" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body card-container">
            <h2 className="card-title title">{restaurant.name}</h2>
            <div className="row g-0">
              <div>
                <hr className="mt-1 mb-6" style={{ minWidth: '100%' }} />
                <DistanceMarkers userDistance={restaurant.userDistance} />
                <div className="d-flex justify-content-center">
                  <hr
                    style={{ width: '6rem', height: '.12rem' }}
                    className="mt-1 mb-1"
                  />
                </div>
                <p className="card-text mt-4">
                  <small
                    style={{ letterSpacing: '.15rem' }}
                    className="text-muted small-text"
                  >
                    Perfect if you are looking for:
                  </small>
                </p>
              </div>
              <VibeLabels restaurant={restaurant} />
              <hr className="mt-1 mb-6" />
            </div>
            <Button
              onClick={() => handleClick()}
              type="button"
              className="btn btn-dark m-2"
              data-toggle="modal"
              data-target={restaurant.id}
              size="lg"
            >
              Show Details
            </Button>
          </div>
        </div>
      </div>

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
  )
}
