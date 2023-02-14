import { Link } from 'react-router-dom'
import { resetFilters } from '../features/filters/filtersSlice'
import { useDispatch } from 'react-redux'

export const Landing = () => {
  return (
    <div className='landing-container'>
      <h2>Landing Component</h2>
      <p>Placeholder - Welcome to our Application demo</p>
      <Link to="/demo">
        <button type="button" className="btn btn-dark">
          Start Demo
        </button>
      </Link>
    </div>
  )
}

// Button group is a demo/placeholder as we had some issues with the initial Bootstrap setup
