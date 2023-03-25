import Icons from "../Icons/Icons";
import Logos from "../Logos/Logos";

export default function Footer() {
  return (
    <footer className="footer-conteiner">
      <div className="logo">
        <Logos name="viajes_footer" />
      </div>
      <div className="contact">
        <Icons name="instagram" />
        <Icons name="facebook" />
      </div>
    </footer>
  )
}