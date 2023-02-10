import { useSelector, useDispatch } from 'react-redux'
import type { AppDispatch, RootState } from '../../app/store'
import { selectUser } from './usersSlice'
import { Link } from 'react-router-dom'

const UsersList = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { users, activeUser } = useSelector((state: RootState) => state.users)

  const renderedUsers = users.map((user) => (
    <div key={user.id}>
      <Link to="/dashboard">
        <button onClick={() => dispatch(selectUser(user))}>{user.name}</button>
      </Link>
    </div>
  ))

  return (
    <section>
      {renderedUsers}
      <p>Active User: {activeUser.name}</p>
    </section>
  )
}

export default UsersList
