import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../app/store";

const UsersList = () => {
    const { users } = useSelector((state: RootState) => state.users)

    const renderedUsers = users.map(user => (
        <div>
            <p>{user.name}</p>
        </div>
    ))

    return (
        <section>
            {renderedUsers}
        </section>
    )
}

export default UsersList