import Icons from "../Icons/Icons"

export default function HomeSection() {
  return (
    <div className="home-section-conteiner">
      <div className="conteiner">
        <div className="title-conteiner">
          <div className="title">
            <h1>
              <Icons name="location" /> AMERICA DEL SUR
            </h1>
            <h2>
              Lugares maravillosos por America del Sur
            </h2>
            <p>
              Estos son algunos lugares que eligen la mayoria de los turistas <br /> que visitan America del Sur.
            </p>
          </div>
          <div className="hidden" />
        </div>
        <div className="card-conteiner">
          <div className="card">
            <h2>PRÓXIMA AVENTURA <Icons name="arrow" /></h2>
            <h3>Europa Meridional</h3>
            <p>Forman parte veinte paises<br /> ej. España, Frencia, etc.</p>
          </div>
        </div>
      </div>
      <div className="nav-slider">
        <div className="bar" />
        <div className="circle">01</div>
      </div>
    </div>
  )
}
