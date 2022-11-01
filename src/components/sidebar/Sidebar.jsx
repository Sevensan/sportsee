import { Link } from "react-router-dom"
import "../../styles/sidebar.scss"

export default function Sidebar() {

  return (
    <div className="sidebar">
      <ul className="menu">
        <li>
          <Link><img src={require("../../assets/img/icon.png")} alt="icone"/></Link>
        </li>
        <li>
          <Link><img src={require("../../assets/img/icon1.png")} alt="icone"/></Link>
        </li>
        <li>
          <Link><img src={require("../../assets/img/icon2.png")} alt="icone"/></Link>
        </li>
        <li>
          <Link><img src={require("../../assets/img/icon3.png")} alt="icone"/></Link>
        </li>
      </ul>
      <p className="copyright">Copiryght, SportSee 2020</p>
    </div>
  )
}
