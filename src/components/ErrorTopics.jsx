import { Link } from "react-router-dom";
const ErrorPage = (props) => {
	const resetPage = () => {
		props.setError(false);
	};

	return (
		<section className="error-page">
			<h1>Oops!</h1>

			<h2>{props.errorMessage}</h2>
			<h3>{`We can't seem to find the ${props.type} you're looking for!`}</h3>
			<Link to="/" onClick={resetPage} className="error-home-button">
				<i className="fa-solid fa-house"></i> Visit Homepage
			</Link>
		</section>
	);
};

export default ErrorPage;
