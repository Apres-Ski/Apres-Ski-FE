import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store/store'

export const Landing = () => {


  return (
    <div>
      <h2>Landing Component</h2>
      <p>Placeholder - Welcome to our Application demo</p>
      <button>Start Demo</button>
    </div>
  )
}
