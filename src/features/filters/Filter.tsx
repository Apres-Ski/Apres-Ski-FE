import { useSelector, useDispatch } from 'react-redux'
import { AppDispatch, RootState } from '../../app/store'
import Form from 'react-bootstrap/Form'
import { toggleHasAlcohol, toggleHasHappyHour } from './filtersSlice'

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
      <section>
        <h2>Vibe</h2>
        <button
          className="btn btn-dark"
          data-bs-toggle="button"
          onClick={() => console.log('family-friendly')}
        >
          Family Friendly
        </button>
        <button
          className="btn btn-dark"
          data-bs-toggle="button"
          onClick={() => console.log('casual')}
        >
          Casual
        </button>
        <button
          className="btn btn-dark"
          data-bs-toggle="button"
          onClick={() => console.log('upscale')}
        >
          Upscale
        </button>
        <button
          className="btn btn-dark"
          data-bs-toggle="button"
          onClick={() => console.log('quick & easy')}
        >
          Quick & Easy
        </button>
        <button
          className="btn btn-dark"
          data-bs-toggle="button"
          onClick={() => console.log('lively')}
        >
          Lively
        </button>
        <button
          className="btn btn-dark"
          data-bs-toggle="button"
          onClick={() => console.log('fun')}
        >
          Fun
        </button>
        <button
          className="btn btn-dark"
          data-bs-toggle="button"
          onClick={() => console.log('cozy')}
        >
          Cozy
        </button>
      </section>
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
