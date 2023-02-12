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
        <Offcanvas.Title>Filters</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Button variant="outline-success" onClick={() => handleBtnClick()}>
          Reset
        </Button>
        <Form>
          <section
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h1>Filters</h1>
          </section>
          <h2>Vibe</h2>
          <ToggleButton
            variant="outline-dark"
            id="familyFriendly"
            value="family friendly"
            checked={vibes.includes('family friendly')}
            type="checkbox"
            onChange={(e) => handleVibeChange(e.target.value)}
          >
            Family Friendly
          </ToggleButton>{' '}
          <ToggleButton
            variant="outline-dark"
            id="casual"
            value="casual"
            checked={vibes.includes('casual')}
            type="checkbox"
            onChange={(e) => handleVibeChange(e.target.value)}
          >
            Casual
          </ToggleButton>{' '}
          <ToggleButton
            variant="outline-dark"
            id="upscale"
            value="upscale"
            checked={vibes.includes('upscale')}
            type="checkbox"
            onChange={(e) => handleVibeChange(e.target.value)}
          >
            Upscale
          </ToggleButton>{' '}
          <ToggleButton
            variant="outline-dark"
            id="quickEasy"
            value="quick & easy"
            checked={vibes.includes('quick & easy')}
            type="checkbox"
            onChange={(e) => handleVibeChange(e.target.value)}
          >
            Quick & Easy
          </ToggleButton>{' '}
          <ToggleButton
            variant="outline-dark"
            id="lively"
            value="lively"
            checked={vibes.includes('lively')}
            type="checkbox"
            onChange={(e) => handleVibeChange(e.target.value)}
          >
            Lively
          </ToggleButton>{' '}
          <ToggleButton
            variant="outline-dark"
            id="fun"
            value="fun"
            checked={vibes.includes('fun')}
            type="checkbox"
            onChange={(e) => handleVibeChange(e.target.value)}
          >
            Fun
          </ToggleButton>{' '}
          <ToggleButton
            variant="outline-dark"
            id="cozy"
            value="cozy"
            checked={vibes.includes('cozy')}
            type="checkbox"
            onChange={(e) => handleVibeChange(e.target.value)}
          >
            Cozy
          </ToggleButton>
          <ToggleButton
            variant="outline-dark"
            id="relaxed"
            value="relaxed"
            checked={vibes.includes('relaxed')}
            type="checkbox"
            onChange={(e) => handleVibeChange(e.target.value)}
          >
            Relaxed
          </ToggleButton>{' '}
          <section>
            <h3>Alcohol</h3>
            <Form.Check
              type="switch"
              id="custom-switch"
              checked={hasAlcohol}
              onChange={() => handleAlcoholChange()}
            />
          </section>
          <section>
            <h4>Happy Hour</h4>
            <Form.Check
              type="switch"
              id="custom-switch"
              checked={hasHappyHour}
              onChange={() => handleHappyHourChange()}
            />
          </section>
        </Form>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
