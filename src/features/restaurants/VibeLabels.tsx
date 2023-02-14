import { VibeLabelsProps, LabelMap } from '../../utilities/interfaces'
import { labelMap } from '../../utilities/utilities'

export const VibeLabels = ({ restaurant }: VibeLabelsProps) => {
  const labels = restaurant.vibes.map((vibe: string, index: number) => {
    const label: keyof LabelMap = vibe
    return (
      <span key={`vibe ${index}`} className={labelMap[label].class}>
        {labelMap[label].text}
      </span>
    )
  })

  return <div className="label-container">{labels}</div>
}
