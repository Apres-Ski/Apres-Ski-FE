import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../app/store/store";
import { selectUser } from './usersSlice'

const UsersList = () => {
    const { users, activeUser } = useSelector((state: RootState) => state.users)

    const dispatch = useDispatch()

    const renderedUsers = users.map(user => (
        <div>
            <button onClick={() => dispatch(selectUser(user))}>{user.name}</button>
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