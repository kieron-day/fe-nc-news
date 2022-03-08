import { fetchArticles } from "../api";
import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

const ArticleList = () => {
	const [articleList, setArticleList] = useState([]);
	const [sortBy, setSortBy] = useState("created_at");
	const [order, setOrder] = useState("desc");
	const [isLoading, setIsLoading] = useState(true);
	const { topic } = useParams();

	useEffect(() => {
		fetchArticles(topic, sortBy, order).then((articles) => {
			setArticleList(articles);
			setIsLoading(false);
		});
	}, [topic, sortBy, order]);

	return (
		<div className="App-content">
			{isLoading ? (
				<p>Loading...</p>
			) : (
				<>
					<h1 className="App-content-title">
						{topic ? topic : "All Articles"}
					</h1>
					<div className="App-content-dropdown">
						<div className="dropdown-sortby">
							<label>Sort By:</label>
							<select
								id="sortBy"
								onChange={(event) => {
									setSortBy(event.target.value);
								}}
							>
								<option value="created_at">Date</option>
								<option value="comment_count">Comments</option>
								<option value="votes">Votes</option>
							</select>
						</div>
						<div className="dropdown-orderby">
							<label>Order By:</label>
							<select
								id="order"
								onChange={(event) => {
									setOrder(event.target.value);
								}}
							>
								<option value="desc">Descending</option>
								<option value="asc">Ascending</option>
							</select>
						</div>
					</div>
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

export default ArticleList;
