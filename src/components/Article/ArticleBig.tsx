import Image from "next/image";
import Icons from "../Icons/Icons";

export default function ArticleBig(props: {
  img: any;
  title: string;
  description: string;
  time: string;
  header: string;
}) {

  return (
    <div className="card-article-conteiner">
      <Image className="img" src={props.img} alt={props.title} />
        <header className="header">{props.header}</header>
        <div className="info-conteiner">
          <span>{props.title}</span>
          <p>{props.description}</p>
          <p className="time"><Icons name="time" />{props.time}</p>
        </div>
    </div>
  )
}
