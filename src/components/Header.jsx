import spinningLogo from "../logo-icon-min.png";
import textLogo from "../text-logo.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchTopics } from "../api";

const Header = () => {
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		fetchTopics().then((topics) => {
			setTopics(topics);
		});
	}, []);

	return (
		<header className="App-header">
			<div className="App-logo">
				<img
					src={spinningLogo}
					className="App-logo-spinning"
					alt="spinning logo"
				/>
				<img src={textLogo} className="App-logo-text" alt="text logo" />
			</div>
			<nav className="App-navigation">
				<Link to="/" className="App-navigation-link">
					All Articles
				</Link>
				{topics.map((topic) => {
					return (
						<Link
							key={topic.slug}
							to={`/topics/${topic.slug}/articles`}
							className="App-navigation-link"
						>
							{topic.slug}
						</Link>
					);
				})}
			</nav>
			<div className="App-login">
				<button className="App-login-button">
					<i className="fa-solid fa-user"></i>
					<Link to="/login">Login</Link>
				</button>
			</div>
		</header>
	);
};

export default Header;
