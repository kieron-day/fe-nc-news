import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
	const getDay = article.created_at.slice(8, 10);
	const getMonth = article.created_at.slice(5, 7);
	const getYear = article.created_at.slice(0, 4);

	const formatPublished = `${getDay}/${getMonth}/${getYear}`;

	return (
		<Link
			to={`/articles/${article.article_id}`}
			className="App-articles-list-articlecard"
		>
			<div className="articlecard-top-row">
				<div className="articlecard-votes">
					<i className="fa-solid fa-thumbs-up fa-xl"></i>
					<h3>{article.votes}</h3>
					<i className="fa-solid fa-thumbs-down fa-xl"></i>
				</div>
				<h3>{article.topic}</h3>
			</div>
			<h2 className="articlecard-title">{article.title}</h2>
			<h3>By {article.author}</h3>
			<h4>{formatPublished}</h4>
			<div className="articlecard-comments">
				<i className="fa-solid fa-comment fa-xl"></i>
				<h3>{article.comment_count}</h3>
			</div>
		</Link>
	);
};

export default ArticleCard;
