import { Link } from "react-router-dom";
import CardVotes from "./CardVotes";
import { getDate } from "./utils/getDate";

const ArticleCard = ({ article }) => {
	return (
		<article className="App-articles-list-articlecard">
			<div className="articlecard-top-row">
				<CardVotes article={article} />
				<h3>{article.topic}</h3>
			</div>
			<Link to={`/articles/${article.article_id}`}>
				<h2 className="articlecard-title">{article.title}</h2>
			</Link>
			<h3>By {article.author}</h3>
			<h4>{getDate(article)}</h4>
			<div className="articlecard-comments">
				<i className="fa-solid fa-comment fa-xl"></i>
				<h3>{article.comment_count}</h3>
			</div>
		</article>
	);
};

export default ArticleCard;
