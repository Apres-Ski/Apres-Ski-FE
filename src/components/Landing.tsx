import { Link } from 'react-router-dom'
import landingVideo from '../assets/sking.mp4'
import welcome from '../assets/apres-welcome3.svg'
import mapIcon from '../assets/area-map.gif'
import { APP_ROUTES } from '../utilities/constants'

export const Landing = () => {
  return (
    <div className="landing-container">
      <div
        style={{
          padding: '8rem 6rem',
          borderRadius: '5px',
          marginTop: '8rem',
          minWidth: '12rem',
          maxWidth: '46rem',
          color: 'black',
          backgroundColor: 'white'
        }}
        className='landing-box'
      >
        <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
        <span>
          <img style={{width: '32rem'}} src={welcome} />
          </span>
        </div>
        <div> 
          <img style={{width: '10rem'}}  src={mapIcon} />
      
        </div>
        <p style={{letterSpacing: '.1rem', fontSize: '1.4rem'}} className="mt-5">
          Après-Ski is an application geared towards snowsport entheusiests
          looking for good vibes, food, and drinks to round out their day.
        </p>
        <Link to={APP_ROUTES.DEMO}>
          <button type="button" className="btn btn-dark mt-4">
            Start Demo
          </button>
        </Link>
      </div>
      <video className="video-settings" autoPlay={true} muted loop>
        <source src={landingVideo} type="video/mp4" />
      </video>
    </div>
  )
}
