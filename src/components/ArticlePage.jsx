// Single Article
// State - Artcile , useparams (Article_id)
// <article> <h2>
//Includes <Comments />

import { fetchArticle } from "../api";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Comments from "./Comments";

const ArticlePage = () => {
	const [article, setArticle] = useState([]);
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
						<div className="article-votes">
							<i className="fa-solid fa-thumbs-up fa-xl"></i>
							<h3>{article.votes}</h3>
							<i className="fa-solid fa-thumbs-down fa-xl"></i>
						</div>
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
					<div className="article-comments">
						<i className="fa-solid fa-comment fa-xl"></i>
						<h3>{article.comment_count}</h3>
					</div>
					<Comments />
				</article>
			)}
		</main>
	);
};

export default ArticlePage;
