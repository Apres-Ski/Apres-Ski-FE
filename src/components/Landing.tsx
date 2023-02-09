import { Link } from 'react-router-dom'

export const Landing = () => {

  return (
    <div>
      <h2>Landing Component</h2>
      <p>Placeholder - Welcome to our Application demo</p>
      <Link to='/demo'>
        <button>Start Demo</button>
      </Link>

      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>

      <button type="button" className="btn btn-link">Link</button>

    </div>
  )
}

// Button group is a demo/placeholder as we had some issues with the initial Bootstrap setup