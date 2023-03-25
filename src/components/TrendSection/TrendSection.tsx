import { trendData } from "@/data/trend-data"
import Card from "../Card/Card"

interface trend {
  title: string;
  new: boolean
  description: string;
  img: any;
}

function replaceTitle(string: string, title: string) {
  let newDescription = string.replace("<title>", `<b>${title}</b>`)
  return newDescription
}

export default function TrendSection() {
  return (
    <div className="trend-conteiner">
      <h2>
        TENDENCIAS
      </h2>
      <div className="trends">
        {trendData.map((el: trend, index: number) => {
          return (
            <Card
              title={el.title}
              new={el.new}
              description={replaceTitle(el.description, el.title)}
              img={el.img}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}
