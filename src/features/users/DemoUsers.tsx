import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import UsersList from './UsersList'
import { getUsers } from './usersSlice'

export const DemoUsers = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { status, error } = useSelector((state: RootState) => state.users)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getUsers())
    }
  }, [status, dispatch])

  let content

  if (status === 'loading') {
    content = <p>Loading...</p>
  } else if (status === 'succeeded') {
    content = (
      <div>
        <h2>Demo Users Component</h2>
        <p>Placeholder - Please select a User</p>
        <UsersList />
      </div>
    )
  } else if (status === 'failed') {
    content = (
      <div>
        <h2 style={{ color: 'red' }}>ERROR</h2>
        <p>{error}</p>
      </div>
    )
  }

  return <section>{content}</section>
}
