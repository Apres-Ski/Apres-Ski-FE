export interface DistanceProps {
  userDistance: string | undefined
}

export const DistanceMarkers = ({ userDistance }: DistanceProps) => {
  const getIcon = (userDistance: string | undefined) => {
    const distanceValue = Number(userDistance)
    if (distanceValue < 0.2) {
      return 'green-location.svg'
    } else if (1 < distanceValue) {
      return 'red-location.svg'
    } else {
      return 'yellow-location.svg'
    }
  }

  return (
    <p style={{ letterSpacing: '.5rem' }} className="card-text small-text">
      <img
        style={{
          width: '2rem',
          marginBottom: '1rem',
          marginRight: '.5rem',
        }}
        src={`../src/assets/${getIcon(userDistance)}`}
      />
      Distance:{' '}
      <span style={{ letterSpacing: '.3rem' }}>{userDistance} miles</span>
    </p>
  )
}
