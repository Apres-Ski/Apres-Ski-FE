import greenLocation from '../../assets/green-location.svg'
import yellowLocation from '../../assets/yellow-location.svg'
import redLocation from '../../assets/red-location.svg'

export interface DistanceProps {
  userDistance: string | undefined
}

export const DistanceMarkers = ({ userDistance }: DistanceProps) => {
  const getIcon = (userDistance: string | undefined) => {
    const distanceValue = Number(userDistance)
    if (distanceValue < 0.2) {
      return greenLocation
    } else if (1 < distanceValue) {
      return redLocation
    } else {
      return yellowLocation
    }
  }

  return (
    <p style={{ letterSpacing: '.5rem', marginBottom: '0rem' }} className="card-text small-text">
      <img
        style={{
          width: '2rem',
          marginBottom: '1rem',
          marginRight: '.5rem',
        }}
        src={getIcon(userDistance)}
        alt="distance marker"
      />
      Distance:{' '}
      <span style={{ letterSpacing: '.3rem' }}>{userDistance} miles</span>
    </p>
  )
}
