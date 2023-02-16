import { Link } from 'react-router-dom'
import landingVideo from '../assets/skiing3.mp4'
import welcome from '../assets/welcome4.png'
import mapIcon from '../assets/area-map.gif'
import { APP_ROUTES } from '../utilities/constants'

export const Landing = () => {
  return (
    <div className="landing-container fade-in">
      <div className="landing-box">
        <span>
          <img className="welcome-logo" src={welcome} alt="welcome logo"/>
          <div>
            <img style={{ width: '10rem' }} src={mapIcon} alt="map icon"/>
          </div>
        </span>

        <p
          style={{ letterSpacing: '.1rem', fontSize: '1.4rem' }}
          className="mt-5"
        >
          Après Ski is an application geared towards snowsport entheusiests in
          Breckenridge, Colorado looking for good vibes, food, and drinks to
          round out their day.
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
