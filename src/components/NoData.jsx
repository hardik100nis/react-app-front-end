import { Image } from "react-bootstrap"
import NoDataImg from "assets/images/no-data.png"

export default function NoData({text}) {
  return (
    <div className="no-nft">
      <Image src={NoDataImg} alt="no-data" /><br />
      {text}
    </div>
  )
}