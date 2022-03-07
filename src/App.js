import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<MainContent />} />
				<Route path="/topics/" element={<MainContent />} />
				<Route path="/topics/:topic/articles" element={<MainContent />} />
			</Routes>
		</div>
	);
}

export default App;
