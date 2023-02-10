import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import Form from 'react-bootstrap/Form'
import { toggleHasAlcohol, toggleHasHappyHour, toggleVibes } from './filtersSlice'
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

  const handleVibeChange = (vibe: string) => {
    dispatch(toggleVibes(vibe))
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
          value='family friendly'
          className={`btn btn-dark ${vibes.includes('family friendly') ? 'active' : ''}`}
          type='checkbox'
          onChange={(e) => handleVibeChange(e.target.value)}
        >
          Family Friendly
        </ToggleButton>
        <ToggleButton
          id='casual'
          value='casual'
          className={`btn btn-dark ${vibes.includes('casual') ? 'active' : ''}`}
          type='checkbox'
          onChange={(e) => handleVibeChange(e.target.value)}
        >
          Casual
        </ToggleButton>
        <ToggleButton
          id='upscale'
          value='upscale'
          className={`btn btn-dark ${vibes.includes('upscale') ? 'active' : ''}`}
          type='checkbox'
          onChange={(e) => handleVibeChange(e.target.value)}
        >
          Upscale
        </ToggleButton>
        <ToggleButton
          id='quickEasy'
          value='quick & easy'
          className={`btn btn-dark ${vibes.includes('quick & easy') ? 'active' : ''}`}
          type='checkbox'
          onChange={(e) => handleVibeChange(e.target.value)}
        >
          Quick & Easy
        </ToggleButton>
        <ToggleButton
          id='lively'
          value='lively'
          className={`btn btn-dark ${vibes.includes('lively') ? 'active' : ''}`}
          type='checkbox'
          onChange={(e) => handleVibeChange(e.target.value)}
        >
          Lively
        </ToggleButton>
        <ToggleButton
          id='fun'
          value='fun'
          className={`btn btn-dark ${vibes.includes('fun') ? 'active' : ''}`}
          type='checkbox'
          onChange={(e) => handleVibeChange(e.target.value)}
        >
          Fun
        </ToggleButton>
        <ToggleButton
          id='cozy'
          value='cozy'
          className={`btn btn-dark ${vibes.includes('cozy') ? 'active' : ''}`}
          type='checkbox'
          onChange={(e) => handleVibeChange(e.target.value)}
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
