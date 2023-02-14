import { useSelector, useDispatch } from 'react-redux'
import type { AppDispatch, RootState } from '../../app/store'
import { selectUser } from './usersSlice'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { resetFilters } from '../filters/filtersSlice'
import user1 from '../../assets/user1.jpg'
import user2 from '../../assets/user2.jpg'
import user3 from '../../assets/user3.jpg'

const colors = ['danger', 'green-accent', 'success']

const UsersList = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { users, activeUser } = useSelector((state: RootState) => state.users)

  useEffect(() => {
    dispatch(resetFilters(''))
  }, [activeUser])

  const renderedUsers = users.map((user, index) => {
    
    let userNum

    if (index === 0) {
      userNum = user1
    } else if (index === 1) {
      userNum = user2
    } else {
      userNum = user3
    }
    
    return <div key={user.id} className='container mt-4' style={{ width: '45%' }}>
      <Link to="/dashboard">
        <img
          src={userNum}
          className={`img-fluid rounded border border-2 border-white`}
          alt='...'
          onClick={() => dispatch(selectUser(user))}
        />
      </Link>
      <p className={`text-${colors[index]}`}>{user.name}</p>
    </div>
} )

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
