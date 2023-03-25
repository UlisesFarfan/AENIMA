import Image from "next/image";
import Icons from "../Icons/Icons";

export default function ArticleSmall(props: {
  img: any;
  title: string;
  time: string;
}) {

  return (
    <div className="card-article-small-conteiner">
      <Image className="img" src={props.img} alt={props.title} />
      <span>{props.title}</span>
      <p className="time"><Icons name="time" />{props.time}</p>
    </div>
  )
}
