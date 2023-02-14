import { useSelector } from 'react-redux'
import type { RootState } from '../../app/store'
import { Alcohol } from './Alcohol'
import { Cost } from './Cost'
import { DistanceMarkers } from './DistanceMarker'
import { HappyHours } from './HappyHours'
import { Hours } from './Hours'
import { VibeLabels } from './VibeLabels'

export const DetailModal = () => {
  const { activeRestaurant } = useSelector(
    (state: RootState) => state.restaurants
  )

  const showHours = Object.entries(activeRestaurant.hours).map((day) => {
    return `${day[0][0].toUpperCase()}: ${day[1]}`
  })

  function hasBooze() {
    if (activeRestaurant.alcoholic) {
      return 'Yes'
    } else {
      return 'No'
    }
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ fontFamily: 'LEMONMILK-Italic' }} className="mb-3">
        {activeRestaurant.name}
      </h1>
      <p style={{ letterSpacing: '.5rem' }} className="card-text">
        <img
          style={{
            width: '3rem',
            marginBottom: '1rem',
            marginRight: '.5rem',
          }}
          src={'../src/assets/area-map.gif'}
        />
        <span style={{ letterSpacing: '.3rem' }}>
          {activeRestaurant.address}
        </span>
      </p>
      <hr className="mt-1 mb-6" />
      <figure className="figure">
        <img
          src={activeRestaurant.coverImg}
          alt={activeRestaurant.alt}
          className="figure-img img-fluid rounded"
        />
      </figure>
      <hr className="mt-1 mb-6" />
      <div style={{ margin: '1rem' }}>
        <DistanceMarkers userDistance={activeRestaurant.userDistance} />
      </div>
      <hr className="mt-1 mb-6" />
      <div className="d-flex flex-column align-items-justify">
        <p
          style={{ letterSpacing: '.5rem', textAlign: 'center' }}
          className="card-text small-text"
        >
          <span style={{ letterSpacing: '.3rem' }}>
            <span>
              <img
                style={{
                  width: '2.7rem',
                  marginRight: '.5rem',
                }}
                src={`../src/assets/menu.svg`}
              />
            </span>
            Food Type: {activeRestaurant.foodType}
          </span>
        </p>
        <hr className="mt-1 mb-6" />
        <Alcohol alcohol={hasBooze()} />
        <hr className="mt-1 mb-6" />
        <Cost cost={activeRestaurant.cost} />
        <hr className="mt-1 mb-6" />
      </div>
      <Hours restaurant={activeRestaurant} />

      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {activeRestaurant.happyHours ? (
          <HappyHours />
        ) : (
          <p>No Specials Available</p>
        )}
      </div>
      <hr className="mt-1 mb-6" />
      <p
        style={{ letterSpacing: '.5rem', textAlign: 'center', fontSize: '1.2rem' }}
        className="card-text small-text"
      >
        Vibes
      </p>
      <VibeLabels restaurant={activeRestaurant} />
    </div>
  )
}
