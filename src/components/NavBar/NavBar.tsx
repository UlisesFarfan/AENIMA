import { useRef, useState } from "react"
import Logos from "../Logos/Logos"
import Icons from "../Icons/Icons"
import * as Scroll from 'react-scroll';

export default function NavBar() {
  let Link = Scroll.Link;
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <nav className="nav-bar-conteiner">
      <div className="deskop">
        <div className="logo">
          <Logos name="viajes_nav_bar" />
        </div>
        <ul className="nav">
          <li >
            <Link activeClass="active" spy to="home-section">
              HOME
            </Link >
          </li>
          <li >
            <Link activeClass="active" spy to="trend-section">
              TENDENCIAS
            </Link >
          </li>
          <li >
            <Link activeClass="active" spy to="blog-section">
              BLOG
            </Link>
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
                  <li >
                    <Link activeClass="active" spy to="home-section">
                      HOME
                    </Link >
                  </li>
                  <li >
                    <Link activeClass="active" spy to="trend-section">
                      TENDENCIAS
                    </Link >
                  </li>
                  <li >
                    <Link activeClass="active" spy to="blog-section">
                      BLOG
                    </Link>
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
