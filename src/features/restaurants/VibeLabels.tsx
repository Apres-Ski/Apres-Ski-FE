import { VibeLabelsProps, LabelMap } from '../../utilities/interfaces'
import { labelMap } from '../../utilities/utilities'

export const VibeLabels = ({ restaurant }: VibeLabelsProps) => {
  const labels = Object.keys(restaurant.vibes)
    .map((vibe: string, index: number) => {
      const label: keyof LabelMap = vibe
      return (
        <span
          key={`vibe ${index}`}
          data-count={restaurant.vibes[label]}
          className={`${labelMap[label].class} position-relative`}
        >
          {`${labelMap[label].text}`}
          <span className="position-absolute top-5 start-100 translate-middle badge rounded-pill bg-dark">
            {restaurant.vibes[label]}
          </span>
        </span>
      )
    })
    .sort((a, b) => {
      return b.props['data-count'] - a.props['data-count']
    })

  return <div className="label-container">{labels}</div>
}
