import React from 'react'
import dollarBill from '../../assets/dollar-bill.svg'

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
            src={dollarBill}
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
            src={dollarBill}
          />
          <img
            style={{
              width: '2.7rem',
              marginRight: '.5rem',
            }}
            src={dollarBill}
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
            src={dollarBill}
          />
          <img
            style={{
              width: '2.7rem',
              marginRight: '.5rem',
            }}
            src={dollarBill}
          />
          <img
            style={{
              width: '2.7rem',
              marginRight: '.5rem',
            }}
            src={dollarBill}
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
