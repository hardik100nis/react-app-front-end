import './ConnectWalletButton.scss'
import RoundButton from './RoundButton'

export default function ConnectWalletButton(props) {
  const {onClick} = props;
  return (
    <RoundButton className='connect-btn' onClick={onClick}>Connect wallet</RoundButton>
  )
}