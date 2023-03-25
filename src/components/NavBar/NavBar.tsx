import { useState } from "react"
import Logos from "../Logos/Logos"
import Icons from "../Icons/Icons"

export default function NavBar() {

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  return (
    <nav className="nav-bar-conteiner">
      <div className="deskop">
        <div className="logo">
          <Logos name="viajes_nav_bar" />
        </div>
        <ul className="nav">
          <li>
            HOME
          </li>
          <li>
            TENDENCIAS
          </li>
          <li>
            BLOG
          </li>
        </ul>
      </div>
      <div className="mobile">
        <div className="logo">
          <Logos name="viajes_nav_bar" />
        </div>
        {
          menuIsOpen ?
            <div className="menu-background">
              <div className="menu">
                <button
                  className="button-menuClose"
                  onClick={() => setMenuIsOpen(!menuIsOpen)}
                >
                  <Icons name="no" />
                </button>
                <ul className="nav">
                  <li>
                    HOME
                  </li>
                  <li>
                    TENDENCIAS
                  </li>
                  <li>
                    BLOG
                  </li>
                </ul>
              </div>
            </div>
            :
            <div className="button-menu-conteiner">
              <button
                className="button-menuOpen"
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              >
                <Icons name="hamburger" />
              </button>
            </div>
        }
      </div>
    </nav>
  )
}
