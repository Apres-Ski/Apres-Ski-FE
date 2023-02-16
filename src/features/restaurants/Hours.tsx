import { ListGroup } from 'react-bootstrap'
import { CleanedRestaurantsState } from '../../utilities/interfaces'
import open from '../../assets/open.svg'

export interface HoursProps {
  restaurant: CleanedRestaurantsState
}

export const Hours = ({ restaurant }: HoursProps) => {
  const showHours = Object.entries(restaurant.hours).map((day) => {
    return (
      <ListGroup.Item key={`hours ${day}`}>
        {day[0][0].toUpperCase()}: {day[1]}
      </ListGroup.Item>
    )
  })

  return (
    <ListGroup>
      <ListGroup.Item>
        <p
          style={{ letterSpacing: '.5rem', textAlign: 'center' }}
          className="card-text small-text"
        >
          <span style={{ letterSpacing: '.3rem' }}>
            <span>
              <img
                style={{
                  width: '2.7rem',
                  marginBottom: '1rem',
                  marginRight: '.5rem',
                }}
                src={open}
                alt="open sign"
              />
            </span>
            HOURS
          </span>
        </p>
      </ListGroup.Item>
      {showHours}
    </ListGroup>
  )
}
