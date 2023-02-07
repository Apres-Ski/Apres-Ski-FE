import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { Link } from 'react-router-dom'

export const Nav = () => {
  const { activeUser } = useSelector((state: RootState) => state.users)

  const userName = activeUser.name.split(' ')
  let grabName = userName[0]

  return (
    <div>
      <h2>Nav Component</h2>
      <div style={{ display: 'flex' }}>
        <p>Welcome {grabName}!</p>
        <p>---Logo Here---</p>
        <Link to='/'>
          <button>Logout</button>
        </Link>
      </div>
    </div>
  )
}
