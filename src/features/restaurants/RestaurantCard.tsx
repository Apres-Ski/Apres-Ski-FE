import { CleanedRestaurantsState } from '../../utilities/interfaces'
import { useSelector, useDispatch } from 'react-redux'
import type { AppDispatch, RootState } from '../../app/store'
import { selectRestaurant } from './restaurantsSlice'
import { DetailModal } from './DetailModal'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode'

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
    <div className="card mt-2 mb-3" style={{ maxWidth: '240' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={restaurant.coverImg}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{restaurant.name}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
            <p style={{ fontSize: '1.4rem' }}>
              <span className="badge bg-info">
                <FontAwesomeIcon icon={faCode} />
                <span className="mx-1">{restaurant.vibes[0]}</span>
              </span>
            </p>
            <p style={{ fontSize: '1.4rem' }}>
              <span className="badge bg-danger">
                <FontAwesomeIcon icon={faCode} />
                <span>{restaurant.vibes[1]}</span>
              </span>
            </p>
            <button
              onClick={() => handleClick()}
              type="button"
              className="btn btn-dark m-2"
              data-toggle="modal"
              data-target={restaurant.id}
            >
              Show Details
            </button>
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
    // <div className="row g-5 mt-1 justify-content-evenly">
    //   <div className="col-lg-6">
    //     <div className="card">
    //       <div className="row g-0">
    //         <div className="col-6 col-md-5">
    //           <img className="card-img" src={restaurant.coverImg} />
    //         </div>
    //         <div className="col-6 col-md-7">
    //           <div className="card-body d-flex flex-column">
    //             <div className="h-100">
    //               <h3 className="card-title">{restaurant.name}</h3>
    //               <p className="card-text">Vibe: {formattedVibes}</p>
    //               <p className="card-text">Distance: .25m</p>
    //               <p className="card-text">PLACEHOLDER FOR VIBE BADGES</p>
    //             </div>
    //           </div>
    //           <div>
    //           <button
    //             onClick={() => handleClick()}
    //             type="button"
    //             className="btn btn-dark m-2"
    //             data-toggle="modal"
    //             data-target={restaurant.id}
    //           >
    //             Show Details
    //           </button>
    //           </div>
    //           <Modal show={show} onHide={handleClose} backdrop="static">
    //             <Modal.Header className="d-flex justify-content-center"></Modal.Header>
    //             <Modal.Body className="d-flex justify-content-center">
    //               {<DetailModal />}
    //             </Modal.Body>
    //             <Modal.Footer className="d-flex justify-content-center">
    //               <Button onClick={() => handleClose()} variant="primary">
    //                 Close
    //               </Button>
    //             </Modal.Footer>
    //           </Modal>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
