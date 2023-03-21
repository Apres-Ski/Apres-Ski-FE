import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

export const RestRating = ({stars}: {stars: number}) => {
  const [rating, setRating] = useState(stars)

  return (
      <Rating style={{marginBottom: '.5rem'}}initialValue={stars} allowFraction={true} readonly={true}/>
  )
}