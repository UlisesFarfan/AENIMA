import { articleBig, articleSmall } from "@/data/article-data";
import ArticleBig from "../Article/ArticleBig";
import ArticleSmall from "../Article/ArticleSmall";

interface articleBig {
  img: any;
  title: string;
  description: string;
  time: string;
  header: string;
}

export default function BlogSection() {
  return (
    <div className="blog-conteiner">
      <h2>
        BLOG
      </h2>
      <div className="articles-big">
        {articleBig.map((el: articleBig, index: number) => {
          return (
            <ArticleBig
              img={el.img}
              title={el.title}
              description={el.description}
              time={el.time}
              header={el.header}
              key={index}
            />
          )
        })}
      </div>
      <div className="articles-small">
      {articleSmall.map((el: any, index: number) => {
          return (
            <ArticleSmall
              img={el.img}
              title={el.title}
              time={el.time}
              key={index}
            />
          )
        })}
      </div>
    </div>
  )
}
