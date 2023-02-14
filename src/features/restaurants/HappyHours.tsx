import { ListGroup } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import type { RootState } from '../../app/store'
import smile from '../../assets/smile.svg'

export const HappyHours = () => {
  const { activeRestaurant } = useSelector(
    (state: RootState) => state.restaurants
  )

  function showSpecial() {
    return Object.entries(activeRestaurant.happyHours).find((item) => {
      return item[0] === 'special'
    })!
  }

    const showHappyHours = Object.entries(activeRestaurant.hours).map((day) => {
      return (
        <ListGroup.Item>
          {day[0][0].toUpperCase()}: {day[1]}
        </ListGroup.Item>
      )
    })
  

  return (
    <ListGroup>
      <ListGroup.Item>
        <p
          style={{ letterSpacing: '.5rem', textAlign: 'center' }}
          className="card-text small-text mt-1"
        >
          <span style={{ letterSpacing: '.3rem' }}>
            <span>
              <img
                style={{
                  width: '2rem',
                  margin: '1rem',
                  marginRight: '.5rem',
                }}
                src={smile}
              />
            </span>
          </span>
         Happy Hours:  <span>{showSpecial()[1]}</span>
        </p>
      </ListGroup.Item>
      {showHappyHours}
    </ListGroup>
  )
}
