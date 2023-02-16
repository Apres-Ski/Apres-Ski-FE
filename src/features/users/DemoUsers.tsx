import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import UsersList from './UsersList'
import { getUsers } from './usersSlice'
import { Error } from '../../components/Error'
import logo from '../../assets/apres-logo.svg'
import { APP_ROUTES } from '../../utilities/constants'
import { Link } from 'react-router-dom'
import { Loader } from '../../components/Loader'

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
    content = <Loader />
  } else if (status === 'succeeded') {
    content = (
      <div className="background-color">
        <img className="m-4 logo" src={logo} alt="logo"/>
        <h2 className="m-4 subtitle">Please Select a User</h2>
        <UsersList />
      </div>
    )
  } else if (status === 'failed') {
    content = (
      <Error message="There was a problem on our end. Please try again." />
    )
  }

  return <section className="fade-in">{content}</section>
}
