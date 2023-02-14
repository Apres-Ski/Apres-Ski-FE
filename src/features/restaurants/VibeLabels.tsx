import { text } from '@fortawesome/fontawesome-svg-core'
import { faCode } from '@fortawesome/free-solid-svg-icons/faCode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { CleanedRestaurantsState } from '../../utilities/interfaces'

interface VibeLabelsProps {
  restaurant: CleanedRestaurantsState
}

export const VibeLabels = ({ restaurant }: VibeLabelsProps) => {
  interface LabelMap {
    [key: string]: { class: string; text: string }
  }

  const labelMap: LabelMap = {
    'family friendly': { class: 'label yellow', text: '🍼 Family Friendly' },
    relaxed: { class: 'label green', text: '🪷 Relaxed' },
    casual: { class: 'label blue', text: '👖 Casual' },
    fun: { class: 'label purple', text: '🥳 Fun' },
    lively: { class: 'label red', text: '💃🏻 Lively' },
    'quick & easy': { class: 'label orange', text: '🚀 Quick & Easy' },
    cozy: { class: 'label pink', text: '☕ Cozy' },
    upscale: { class: 'label lightblue', text: '💎 Upscale' },
  }

  const labels = restaurant.vibes.map((vibe: string, index: number) => {
    const label: keyof LabelMap = vibe
    return (
      <span key={`vibe ${index}`} className={labelMap[label].class}>
        {labelMap[label].text}
      </span>
    )
  })

  const test = 'family friendly'
  const test2 = 'relaxed'
  const test3 = 'casual'
  const test4 = 'fun'
  const test5 = 'lively'
  const test6 = 'quick & easy'
  const test7 = 'cozy'
  const test8 = 'upscale'

  return <div className="label-container">{labels}</div>
}
