import { useState, useEffect } from 'react'
import './Timer.scss'

export default function Timer({timeToEnd}) {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)

  useEffect(() => {
    const getTimeUntil = () => {
      const deadline = timeToEnd ? parseInt(timeToEnd) * 1000 : 0
      const time = deadline - Date.now()
      if (time < 0) {
        setDays(0)
        setHours(0)
        setMinutes(0)
      } else {
        const seconds = Math.floor((time / 1000) % 60)
        const minutes = Math.floor((time / 1000 / 60) % 60)
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24)
        const days = Math.floor(time / (1000 * 60 * 60 * 24))
        setDays(days)
        setHours(hours)
        setMinutes(minutes)
      }
    }
    const timer = setInterval(getTimeUntil, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [timeToEnd])

  return (
    <div className="timer">
      <div>
        <span className="number-container end">{days < 10 ? 0 : Math.floor(days / 10)}</span>
        <span className="number-container mid">{days % 10}</span>
        <div className='unit text-center'>days</div>
      </div>
      <div>
        <span className="number-container center">{hours < 10 ? 0 : Math.floor(hours / 10)}</span>
        <span className="number-container center">{hours % 10}</span>
        <div className='unit text-center'>hours</div>
      </div>
      <div>
        <span className="number-container mid">{minutes < 10 ? 0 : Math.floor(minutes / 10)}</span>
        <span className="number-container end">{minutes % 10}</span>
        <div className='unit text-center'>minutes</div>
      </div>
    </div>
  )
}
