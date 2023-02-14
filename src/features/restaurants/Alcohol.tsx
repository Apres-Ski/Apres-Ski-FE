import alcoholImg from '../../assets/alcohol.svg'

export interface AlcoholProps {
  alcohol: string
}

export const Alcohol = ({alcohol}: AlcoholProps) => {
  return (
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
            src={alcoholImg}
          />
        </span>
        Alcohol: {alcohol}
      </span>
    </p>
  )
}
