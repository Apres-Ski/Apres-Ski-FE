import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import Form from 'react-bootstrap/Form'
import {
  resetFilters,
  toggleHasAlcohol,
  toggleHasHappyHour,
  toggleVibes,
} from './filtersSlice'
import ToggleButton from 'react-bootstrap/ToggleButton'
import { Button, Offcanvas } from 'react-bootstrap'

interface FilterMenu {
  show: boolean
  handleClose: () => void
}

export const Filter = ({ show, handleClose }: FilterMenu) => {
  const { vibes, hasAlcohol, hasHappyHour } = useSelector(
    (state: RootState) => state.filters
  )
  const dispatch = useDispatch<AppDispatch>()

  const handleAlcoholChange = () => {
    dispatch(toggleHasAlcohol(hasAlcohol))
  }

  const handleHappyHourChange = () => {
    dispatch(toggleHasHappyHour(hasAlcohol))
  }

  const handleVibeChange = (vibe: string) => {
    dispatch(toggleVibes(vibe))
  }

  const handleBtnClick = () => {
    dispatch(resetFilters(show)) // look into empty dispatches
  }

  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title
          style={{ fontSize: '1.1rem', textAlign: 'center' }}
          className="label green"
        >
          Filters
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Form>
          <section
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              flexWrap: 'wrap',
            }}
          >
            <h3
              style={{
                fontSize: '1.2rem',
                width: '12rem',
                textAlign: 'center',
              }}
              className="label purple px-4 mb-4"
            >
              Vibes{' '}
              <span style={{ letterSpacing: '.5rem' }} className="card-text">
                <img
                  style={{
                    width: '2rem',
                  }}
                  src={'../src/assets/rainbow_sparkles.gif'}
                  alt="rainbow sparkles"
                />
              </span>
            </h3>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <ToggleButton
                variant="outline-dark"
                id="familyFriendly"
                value="family friendly"
                checked={vibes.includes('family friendly')}
                type="checkbox"
                onChange={(e) => handleVibeChange(e.target.value)}
                className="m-2"
              >
                🍼 Family Friendly
              </ToggleButton>{' '}
              <ToggleButton
                variant="outline-dark"
                id="casual"
                value="casual"
                checked={vibes.includes('casual')}
                type="checkbox"
                onChange={(e) => handleVibeChange(e.target.value)}
                className="m-2"
              >
                👖 Casual
              </ToggleButton>{' '}
              <ToggleButton
                variant="outline-dark"
                id="upscale"
                value="upscale"
                checked={vibes.includes('upscale')}
                type="checkbox"
                onChange={(e) => handleVibeChange(e.target.value)}
                className="m-2"
              >
                💎 Upscale
              </ToggleButton>{' '}
              <ToggleButton
                variant="outline-dark"
                id="quickEasy"
                value="quick & easy"
                checked={vibes.includes('quick & easy')}
                type="checkbox"
                onChange={(e) => handleVibeChange(e.target.value)}
                className="m-2"
              >
                🚀 Quick & Easy
              </ToggleButton>{' '}
              <ToggleButton
                variant="outline-dark"
                id="lively"
                value="lively"
                checked={vibes.includes('lively')}
                type="checkbox"
                onChange={(e) => handleVibeChange(e.target.value)}
                className="m-2"
              >
                💃🏻 Lively
              </ToggleButton>{' '}
              <ToggleButton
                variant="outline-dark"
                id="fun"
                value="fun"
                checked={vibes.includes('fun')}
                type="checkbox"
                onChange={(e) => handleVibeChange(e.target.value)}
                className="m-2"
              >
                🥳 Fun
              </ToggleButton>{' '}
              <ToggleButton
                variant="outline-dark"
                id="cozy"
                value="cozy"
                checked={vibes.includes('cozy')}
                type="checkbox"
                onChange={(e) => handleVibeChange(e.target.value)}
                className="m-2"
              >
                ☕ Cozy
              </ToggleButton>
              <ToggleButton
                variant="outline-dark"
                id="relaxed"
                value="relaxed"
                checked={vibes.includes('relaxed')}
                type="checkbox"
                onChange={(e) => handleVibeChange(e.target.value)}
                className="m-2"
              >
                🪷 Relaxed
              </ToggleButton>{' '}
            </div>
            <h3
              style={{
                fontSize: '1.2rem',
                width: '12rem',
                textAlign: 'center',
                marginTop: '2rem',
              }}
              className="label yellow mb-3"
            >
              Alcohol
              <span className="card-text">
                <img
                  style={{
                    width: '2rem',
                    marginBottom: '.4rem',
                  }}
                  src={'../src/assets/cheers.gif'}
                  alt="beers icon"
                />
              </span>
            </h3>
            <Form.Check
              type="switch"
              id="custom-switch"
              checked={hasAlcohol}
              onChange={() => handleAlcoholChange()}
              className="mb-2"
            />
            <h4
              style={{
                fontSize: '1.2rem',
                textAlign: 'center',
                marginTop: '1rem',
              }}
              className="label lightblue px-4 mb-3"
            >
              Happy Hour{' '}
              <span className="card-text">
                <img
                  style={{
                    width: '1.4rem',
                    marginBottom: '.4rem',
                  }}
                  src={'../src/assets/alarm_clock.gif'}
                  alt="clock icon"
                />
              </span>
            </h4>
            <Form.Check
              type="switch"
              id="custom-switch"
              checked={hasHappyHour}
              onChange={() => handleHappyHourChange()}
            />
            <Button
              variant="outline-dark"
              className="m-4 px-5"
              onClick={() => handleBtnClick()}
            >
              Reset
            </Button>
          </section>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
