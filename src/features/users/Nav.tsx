import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../app/store'
import { Link } from 'react-router-dom'
import { resetUser } from './usersSlice'


export const Nav = () => {
  const { activeUser } = useSelector((state: RootState) => state.users)

  const dispatch = useDispatch()
  
  const userName = activeUser.name.split(' ')
  let grabName = userName[0]

  return (
    <div>
      <h2>Nav Component</h2>
      <div style={{ display: 'flex' }}>
        <p>Welcome {grabName}!</p>
        <p>---Logo Here---</p>
        <Link to='/'>
          <button onClick={() => dispatch(resetUser(activeUser))}>Logout</button>
        </Link>
      </div>
    </div>
  )
}
