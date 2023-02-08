import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../../app/store"
import { selectUser } from './usersSlice'
import { Link } from 'react-router-dom'

const UsersList = () => {
    const { users, activeUser } = useSelector((state: RootState) => state.users)

    const dispatch = useDispatch()

    const renderedUsers = users.map(user => (
        <div key={user.id}>
            <Link to='/dashboard'>
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