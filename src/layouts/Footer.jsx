import {Image} from 'react-bootstrap'
import './Footer.scss'
import BackToTopArrow from 'assets/images/totoparrow.png'

export default function Footer() {
  const backToTop = () => {
    window.scrollTo({
      top: 0
    })
  }
  return (
    <div className='footer'>
      <button className='back-to-top-button' onClick={backToTop}>
        <Image src={BackToTopArrow} />
        Back to top
      </button>
    </div>
  )
}