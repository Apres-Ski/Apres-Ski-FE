import { Map } from '../common/Map'
import { useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getRestaurants, setDistance } from './restaurantsSlice'
import { RestaurantList } from './RestaurantList'
import { NavMenu } from '../users/Nav'
import { Filter } from '../filters/Filter'
import { Error } from '../../components/Error'
import { useNavigate } from 'react-router-dom'
import { APP_ROUTES } from '../../utilities/constants'
import { Button } from 'react-bootstrap'
import { getLifts } from '../lifts/liftsSlice'
import { getUserDistance } from '../../utilities/utilities'
import { Loader } from '../../components/Loader'

export const Dashboard = () => {
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { status } = useSelector((state: RootState) => state.restaurants)
  const { activeUser } = useSelector((state: RootState) => state.users)
  const { liftsStatus } = useSelector((state: RootState) => state.lifts)
  const { restaurants } = useSelector((state: RootState) => state.restaurants)
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

  useEffect(() => {
    restaurants.forEach((restaurant) =>
      dispatch(
        setDistance({
          id: restaurant.id,
          distance: getUserDistance(
            Number(activeUser.location.lat),
            Number(activeUser.location.long),
            Number(restaurant.location.lat),
            Number(restaurant.location.long)
          ),
        })
      )
    )
  }, [restaurants])

  let content

  if (status === 'loading') {
    content = <Loader />
  } else if (status === 'succeeded') {
    content = (
      <div
        className="fade-in w-100 d-flex flex-column align-items-center"
        style={{
          maxWidth: '1280px',
          paddingTop: '4rem',
        }}
      >
        <NavMenu />
        <div className="me-2 m-4"></div>
        <Map />
        <Button
          variant="green-accent"
          onClick={handleShow}
          className="me-2 m-4 small-text"
          style={{ width: '22rem', fontFamily: 'LEMONMILK' }}
        >
          Filter
        </Button>
        <RestaurantList />
        <Filter show={show} handleClose={handleClose} />
      </div>
    )
  } else if (status === 'failed') {
    content = (
      <Error message="There was a problem on our end. Please try again." />
    )
  }

  return (
    <div className="w-100 d-flex flex-column align-items-center">{content}</div>
  )
}
