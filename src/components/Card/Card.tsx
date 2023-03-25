import Image from "next/image";
export default function Card(props: {
  img: any;
  new: boolean;
  title: string;
  description: string;
}) {

  return (
    <div className={`${props.new ? "new" : "hidde"} card-trend-conteiner`}>
      <Image className="img" src={props.img} alt={props.title} />
      <div className="info-card">
        {props.new && <div className="new">NUEVO</div>}
        <h3>{props.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: props.description }} />
      </div>
    </div>
  )
}
