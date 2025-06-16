import './RoundButton.scss';

export default function RoundButton({children, className, onClick, variant, disabled }) {
  return (
    <button className={`round-button ${className ?? ''} ${variant ?? ''}`} onClick={onClick} disabled={disabled}>{children}</button>
  )
}