import { fetchArticle } from "../api";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CommentsList from "./CommentsList";
import ErrorPage from "./ErrorPage";
import PageVotes from "./PageVotes";
import { getDate } from "./utils/getDate";

const ArticlePage = ({ user }) => {
	const [article, setArticle] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);
	const { article_id } = useParams();
	useEffect(() => {
		fetchArticle(article_id)
			.then((article) => {
				setArticle(article);
				setIsLoading(false);
			})
			.catch((err) => {
				setError(true);
			});
	}, [article_id]);

	let navigate = useNavigate();

	if (error) {
		return <ErrorPage errorMessage={"Article Not Found"} type={"article"} />;
	}
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
