import { fetchArticle } from "../api";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommentsList from "./CommentsList";
import PageVotes from "./PageVotes";

const ArticlePage = ({ user }) => {
	const [article, setArticle] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const { article_id } = useParams();
	useEffect(() => {
		fetchArticle(article_id).then((article) => {
			setArticle(article);
			setIsLoading(false);
		});
	}, [article_id]);

	const getDate = (article) => {
		const getDay = article.created_at.slice(8, 10);
		const getMonth = article.created_at.slice(5, 7);
		const getYear = article.created_at.slice(0, 4);
		return `${getDay}/${getMonth}/${getYear}`;
	};

	let navigate = useNavigate();

	return (
		<main className="article-page">
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<article>
					<section className="article-top-row">
						<PageVotes article={article} />
						<button
							onClick={() => navigate(-1)}
							className="article-back-button"
						>
							Go Back
						</button>
						<h3 className="article-topic">{article.topic}</h3>
					</section>
					<h1 className="article-title">{article.title}</h1>
					<h3>By {article.author}</h3>
					<h4>{getDate(article)}</h4>
					<p className="article-body">{article.body}</p>
					<CommentsList article={article} user={user} />
				</article>
			)}
		</main>
	);
};

export default ArticlePage;
