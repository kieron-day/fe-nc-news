import "./App.css";
import Header from "./components/Header";
import ArticleList from "./components/ArticleList";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<ArticleList />} />
				<Route path="/topics/" element={<ArticleList />} />
				<Route path="/topics/:topic/articles" element={<ArticleList />} />
			</Routes>
		</div>
	);
}

export default App;
