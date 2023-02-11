import { CleanedRestaurantsState } from '../../utilities/interfaces'
import { useSelector, useDispatch } from 'react-redux'
import type { AppDispatch, RootState } from '../../app/store'
import { selectRestaurant } from './restaurantsSlice'
import { DetailModal } from './DetailModal'
import Modal from 'react-bootstrap/Modal'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import { useState } from 'react'

export const RestaurantCard = ({ restaurant }: { restaurant: CleanedRestaurantsState }) => {

  const { restaurants, activeRestaurant } = useSelector((state: RootState) => state.restaurants)

  const dispatch = useDispatch<AppDispatch>()

  // const selectedRestaurant = restaurants.find(spot => (
  //     <div key={spot.id}>
  //             <button onClick={() => dispatch(selectRestaurant(spot))}>{spot.name}</button>
  //     </div>
  //   ))

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleClick = () => {
    dispatch(selectRestaurant(restaurant))
    setShow(true)
  }

  return (
    <div>
      <p>{restaurant.name}</p>
      <p>Vibe: {restaurant.vibes}</p>
      <p>Distance: .25m</p>
      <img style={{ width: 350 }} src={restaurant.coverImg} />
      <p>PLACEHOLDER FOR VIBE BADGES</p>
      <button onClick={() => handleClick()} type="button" className="btn btn-primary" data-toggle="modal" data-target={restaurant.id}>
        Show Details
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
      >
        <Modal.Header className='d-flex justify-content-center'>
            {/* <Modal.Title className='text-danger'>{activeRestaurant.name}</Modal.Title> */}
        </Modal.Header>
          <Modal.Body className='d-flex justify-content-center'>
            {<DetailModal />}
          </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <Button onClick={() => handleClose()}variant='primary'>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
