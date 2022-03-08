import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import ArticlePage from "./components/ArticlePage";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<ArticleList />} />
				<Route path="/topics/" element={<ArticleList />} />
				<Route path="/topics/:topic/articles" element={<ArticleList />} />
				<Route path="/articles/:article_id" element={<ArticlePage />} />
			</Routes>
		</div>
	);
}

export default App;
