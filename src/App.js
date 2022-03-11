import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import ArticlePage from "./components/ArticlePage";
import ErrorPage from "./components/ErrorPage";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
	const [user] = useState("cooljmessy");
	return (
		<div className="App">
			<Header user={user} />
			<Routes>
				<Route path="/" element={<ArticleList />} />
				<Route path="/topics/" element={<ArticleList />} />
				<Route path="/topics/:topic" element={<ArticleList />} />
				<Route
					path="/articles/:article_id"
					element={<ArticlePage user={user} />}
				/>
				<Route
					path="*"
					element={<ErrorPage errorMessage={"Page Not Found"} type={"page"} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
