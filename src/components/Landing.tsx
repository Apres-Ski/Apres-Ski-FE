import { Link } from 'react-router-dom'

export const Landing = () => {
  return (
    <div className="landing-container">
      <div
        style={{
          background: 'white',
          padding: '10rem 6rem',
          borderRadius: '5px',
        }}
      >
        <h1 className='nav-title'>Aprè Ski</h1>
        <p>Placeholder - Welcome to our Application demo</p>
        <Link to="/demo">
          <button type="button" className="btn btn-dark">
            Start Demo
          </button>
        </Link>
      </div>
      <video className="video-settings" autoPlay={true}>
        <source src={'src/assets/sking.mp4'} type="video/mp4" />
      </video>
    </div>
  )
}

// Button group is a demo/placeholder as we had some issues with the initial Bootstrap setup
