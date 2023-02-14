export interface CostProps {
  cost: string
}

export const Cost = ({ cost }: CostProps) => {
  const checkCost = (cost: string) => {
    if (cost === '1') {
      return (
        <span>
          <img
            style={{
              width: '2.7rem',
              marginRight: '.5rem',
            }}
            src={`../src/assets/dollar-bill.svg`}
          />
        </span>
      )
    } else if (cost === '2') {
      return (
        <span>
          <img
            style={{
              width: '2.7rem',
              marginRight: '.5rem',
            }}
            src={`../src/assets/dollar-bill.svg`}
          />
          <img
            style={{
              width: '2.7rem',
              marginRight: '.5rem',
            }}
            src={`../src/assets/dollar-bill.svg`}
          />
        </span>
      )
    } else if (cost === '3') {
      return (
        <span>
          <img
            style={{
              width: '2.7rem',
              marginRight: '.5rem',
            }}
            src={`../src/assets/dollar-bill.svg`}
          />
          <img
            style={{
              width: '2.7rem',
              marginRight: '.5rem',
            }}
            src={`../src/assets/dollar-bill.svg`}
          />
          <img
            style={{
              width: '2.7rem',
              marginRight: '.5rem',
            }}
            src={`../src/assets/dollar-bill.svg`}
          />
        </span>
      )
    }
  }

  return (
    <>
      <p style={{ letterSpacing: '.5rem' }} className="card-text small-text">
        <span>Cost: {checkCost(cost)}</span>
      </p>
    </>
  )
}
