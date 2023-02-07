import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store/store'
import UsersList from '../features/users'


export const DemoUsers = () => {

  return (
    <div>
      <h2>Demo Users Component</h2>
      <p>Placeholder - Please select a User</p>
      <UsersList />
    </div>
  )
}
