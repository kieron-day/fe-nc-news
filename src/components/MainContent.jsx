import { fetchArticles } from "../api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

const MainContent = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [articleList, setArticleList] = useState([]);
	const { topic } = useParams();

	useEffect(() => {
		fetchArticles(topic).then((articles) => {
			setArticleList(articles);
			setIsLoading(false);
		});
	}, [topic]);

	return (
		<div className="App-content">
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					<h1 className="App-content-title">
						{topic ? topic : "All Articles"}
					</h1>
					<section className="App-articles-list">
						{articleList.map((article) => {
							return <ArticleCard key={article.article_id} article={article} />;
						})}
					</section>
				</>
			)}
		</div>
	);
};

export default MainContent;
