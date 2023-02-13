import { Map } from '../common/Map'
import { useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getRestaurants } from './restaurantsSlice'
import { RestaurantList } from './RestaurantList'
import { NavMenu } from '../users/Nav'
import { Filter } from '../filters/Filter'
import { Error } from '../../components/Error'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../../utilities/constants'
import { Button } from 'react-bootstrap'
import { getLifts } from '../lifts/liftsSlice' 

export const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { status } = useSelector((state: RootState) => state.restaurants)
  const { activeUser } = useSelector((state: RootState) => state.users)
  const { liftsStatus } = useSelector((state: RootState) => state.lifts)
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    if (activeUser.id === null) {
      navigate(APP_ROUTES.LANDING)
    }
  }, [activeUser])

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getRestaurants())
    }
  }, [status, dispatch])

  useEffect(() => {
    if (liftsStatus === 'idle') {
      dispatch(getLifts())
    }
  }, [liftsStatus, dispatch])

  let content

  if (status === 'loading') {
    content = <p>Loading...</p>
  } else if (status === 'succeeded') {
    content = (
      <div className='w-100 d-flex flex-column align-items-center'>
        <NavMenu />
        <Button variant="primary" onClick={handleShow} className="me-2">
          Filter
        </Button>
        <Map />
        <RestaurantList />
        <Filter show={show} handleClose={handleClose} />
      </div>
    )
  } else if (status === 'failed') {
    content = (
      <Error message='There was a problem on our end. Please try again.'/>
    )
  }

  return <section className='w-100'>{content}</section>
}
