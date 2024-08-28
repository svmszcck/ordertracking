import { Image, Typography } from "components";

const Article = () => {
  return (
    <div className="article">
      <Image
        src="https://images.unsplash.com/photo-1615526675159-e248c3021d3f"
        alt="article-img"
        className="article-img"
      />
      <div className="article-info">
        <Typography tag="p">Title</Typography>
        <Typography tag="p" pale>
          Article number:
        </Typography>
        <Typography tag="p">4199$</Typography>
      </div>
    </div>
  );
};

export default Article;
