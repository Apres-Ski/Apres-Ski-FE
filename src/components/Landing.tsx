import { Link } from 'react-router-dom'

export const Landing = () => {

  return (
    <div>
      <h2>Landing Component</h2>
      <p>Placeholder - Welcome to our Application demo</p>
      <Link to='/demo'>
        <button>Start Demo</button>
      </Link>
    </div>
  )
}
