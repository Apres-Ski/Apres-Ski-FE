import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import UsersList from './UsersList'
import { getUsers } from './usersSlice'
import { Error } from '../../components/Error'

export const DemoUsers = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { status } = useSelector((state: RootState) => state.users)

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
      <div className="background-color">
        <h2 className="m-5">Please Select a User</h2>
        <UsersList />
      </div>
    )
  } else if (status === 'failed') {
    content = (
      <Error message="There was a problem on our end. Please try again." />
    )
  }

  return <section>{content}</section>
}
