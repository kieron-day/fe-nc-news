const ArticleCard = ({ article }) => {
	return (
		<div className="App-articles-list-articlecard">
			<div className="articlecard-top-row">
				<div className="articlecard-votes">
					<i className="fa-solid fa-thumbs-up fa-xl"></i>
					<h3>{article.votes}</h3>
					<i className="fa-solid fa-thumbs-down fa-xl"></i>
				</div>
				<h3>{article.topic}</h3>
			</div>
			<h2 className="articlecard-title">{article.title}</h2>
			<h3>Author: {article.author}</h3>
			<p>Date Published: {article.created_at}</p>
			<div className="articlecard-comments">
				<i className="fa-solid fa-comment fa-xl"></i>
				<h3>{article.comment_count}</h3>
			</div>
		</div>
	);
};

export default ArticleCard;
