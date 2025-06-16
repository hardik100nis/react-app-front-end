import React, { useState, useEffect } from 'react'
import './BettingTimer.scss'

const BettingTimer = ({ timeToEnd }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Math.floor(Date.now() / 1000)
      const difference = timeToEnd - now

      if (difference > 0) {
        const days = Math.floor(difference / (60 * 60 * 24))
        const hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60))
        const minutes = Math.floor((difference % (60 * 60)) / 60)
        const seconds = Math.floor(difference % 60)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [timeToEnd])

  const padNumber = (num) => String(num).padStart(2, '0')

  return (
    <div className="modern-timer">
      {timeLeft.days > 0 && (
        <div className="time-unit">
          <div className="time-value">{padNumber(timeLeft.days)}</div>
          <div className="time-label">D</div>
        </div>
      )}
      <div className="time-unit">
        <div className="time-value">{padNumber(timeLeft.hours)}</div>
        <div className="time-label">H</div>
      </div>
      <div className="time-unit">
        <div className="time-value">{padNumber(timeLeft.minutes)}</div>
        <div className="time-label">M</div>
      </div>
      <div className="time-unit">
        <div className="time-value">{padNumber(timeLeft.seconds)}</div>
        <div className="time-label">S</div>
      </div>
    </div>
  )
}

export default BettingTimer
