import { useContext } from "react";

import { Button, Image, Typography } from "components";
import { usePagination } from "hooks/usePagination";
import type { Order } from "services/types/Order";
import { OrderContext } from "contexts/orderContext";

const Articles = () => {
  const { order } = useContext(OrderContext);
  const { loadMore, paginatedData } = usePagination(
    order?.delivery_info.articles,
    5
  );

  return order ? (
    <div className="articles">
      <Typography tag="h5" className="title" bold>
        Articles
      </Typography>
      {(paginatedData as Order["delivery_info"]["articles"]).map((article) => (
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

      {paginatedData.length < order.delivery_info.articles.length && (
        <Button
          onClick={loadMore}
          className="load-more"
          text="More"
          variant="plain"
          ariaLabel="load more"
        />
      )}
    </div>
  ) : (
    <div>There is no data!</div>
  );
};

export default Articles;
