import { useSelector, useDispatch } from 'react-redux'
import type { AppDispatch, RootState } from '../../app/store'
import { selectUser } from './usersSlice'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { resetFilters } from '../filters/filtersSlice'

const colors = ['danger', 'primary', 'success']

const UsersList = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { users, activeUser } = useSelector((state: RootState) => state.users)

  useEffect(() => {
    dispatch(resetFilters(''))
  }, [activeUser])

  const renderedUsers = users.map((user, index) => (
    <div key={user.id} className='container' style={{ width: '45%' }}>
      <Link to="/dashboard">
        <img
          src={`src/assets/user${index + 1}.jpg`}
          className={`img-fluid rounded border border-2 border-${colors[index]}`}
          alt='...'
          onClick={() => dispatch(selectUser(user))}
        />
      </Link>
      <p className={`text-${colors[index]}`}>{user.name}</p>
    </div>
  ))

  return (
    <div>
      <section className='d-flex'>
        {renderedUsers[0]}
        {renderedUsers[1]}
      </section>
      <section>
        {renderedUsers[2]}
      </section>
    </div>
)}

export default UsersList
