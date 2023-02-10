import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import Form from 'react-bootstrap/Form'
import { toggleHasAlcohol, toggleHasHappyHour } from './filtersSlice'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

export const Filter = () => {
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


  return (
    <Form>
      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Filters</h1>
        <button
          onClick={() => console.log('close filter')}
          style={{ position: 'absolute', right: 0 }}
        >
          X
        </button>
      </section>
      <ToggleButtonGroup type='checkbox'>
        <h2>Vibe</h2>
        <ToggleButton
          id='familyFriendly'
          value='familyFriendly'
          checked={vibes.familyFriendly}
          type='checkbox'
        >
          Family Friendly
        </ToggleButton>
        <ToggleButton
          value='casual'
          checked={vibes.casual}
          type='checkbox'
        >
          Casual
        </ToggleButton>
        <ToggleButton
          value='upscale'
          className="btn btn-dark"
        >
          Upscale
        </ToggleButton>
        <ToggleButton
          value='quickEasy'
          className="btn btn-dark"
        >
          Quick & Easy
        </ToggleButton>
        <ToggleButton
          value='lively'
          className="btn btn-dark"
        >
          Lively
        </ToggleButton>
        <ToggleButton
          value='fun'
          className="btn btn-dark"
        >
          Fun
        </ToggleButton>
        <ToggleButton
          value='cozy'
          className="btn btn-dark"
        >
          Cozy
        </ToggleButton>
      </ToggleButtonGroup>
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
  )
}
