import { useContext } from "react";

import { Image, Typography } from "components";
import { OrderContext } from "contexts/orderContext";

const Article = () => {
  const { order } = useContext(OrderContext);

  return order ? (
    <div className="articles">
      <Typography tag="h5" className="title">
        Articles
      </Typography>
      {order.delivery_info.articles.map((article) => (
        <div className="article" key={article.articleNo}>
          <Image
            src={article.articleImageUrl}
            alt="Article Image"
            className="article-img"
          />
          <div className="article-info">
            <Typography tag="p">{article.articleName}</Typography>
            <Typography tag="p" pale>
              Article number: {article.articleNo}
            </Typography>
            <Typography tag="p">{article.price}$</Typography>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div>There is no data!</div>
  );
};

export default Article;
