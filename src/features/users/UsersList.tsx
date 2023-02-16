import { useSelector, useDispatch } from 'react-redux'
import type { AppDispatch, RootState } from '../../app/store'
import { useEffect } from 'react'
import { resetFilters } from '../filters/filtersSlice'
import { Card } from 'react-bootstrap'
import lilyWhite from '../../assets/lily.jpg'
import thomasPena from '../../assets/thomas.jpg'
import jackHill from '../../assets/test.jpg'
import { selectUser } from './usersSlice'
import { APP_ROUTES } from '../../utilities/constants'
import { Link } from 'react-router-dom'

const colors = ['yellow', 'lightblue', 'green']
const usersList = [lilyWhite, thomasPena, jackHill]

const UsersList = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { users, activeUser } = useSelector((state: RootState) => state.users)

  useEffect(() => {
    dispatch(resetFilters(''))
  }, [activeUser])

  const renderedUsers = users.map((user, index) => {
    return (
      <Link style={{ color: 'black' }} to={APP_ROUTES.DASH} key={user.id}>
        <Card
          style={{
            width: '24rem',
            margin: '2rem',
            cursor: 'pointer',
          }}
          onClick={() => dispatch(selectUser(user))}
        >
          <Card.Img
            variant="top"
            src={usersList[index]}
            alt={users[index].name}
          />
          <Card.Body>
            <Card.Title className={`label ${colors[index]}`}>
              {users[index].name}
            </Card.Title>
          </Card.Body>
        </Card>
      </Link>
    )
  })

  return (
    <div className="d-flex m-4 align-items-center justify-content-center flex-wrap">
      {renderedUsers}
    </div>
  )
}

export default UsersList
