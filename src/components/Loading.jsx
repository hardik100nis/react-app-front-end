import {Spinner} from 'react-bootstrap'
import './Loading.scss'

export default function Loading() {
  return (
    <div className='loading-container'>
      <Spinner animation="grow" variant="danger" />
    </div>
  )
}