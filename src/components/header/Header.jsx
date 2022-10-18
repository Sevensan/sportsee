import { Link } from "react-router-dom"
import "../../styles/header.scss"

export default function Header() {

  return (
    <div className="header">
      <ul className="header__menu">
        <li><img src={require("../../assets/img/logo.png")} alt="logo"/></li>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/">Profil</Link></li>
        <li><Link to="/">Réglage</Link></li>
        <li><Link to="/">Communauté</Link></li>
      </ul>
    </div>
  )
}
