import { useState, useEffect } from "react";
import { patchVotes } from "../api";

const PageVotes = ({ article }) => {
	const [voteChange, setVoteChange] = useState(0);
	const [voteCount, setVoteCount] = useState(0);

	useEffect(() => {
		setVoteCount(article.votes);
	}, [article.votes]);

	const handleVote = (change) => {
		if (voteChange === change) {
			setVoteChange(() => 0);
			setVoteCount((voteCount) => voteCount - change);
			patchVotes(article.article_id, -change);
		} else if (voteChange === 1 && change === -1) {
			setVoteChange(() => 0);
			setVoteCount((voteCount) => voteCount + change);
			patchVotes(article.article_id, change);
		} else if ((voteChange === 0 && change === 1) || change === -1) {
			setVoteChange(() => {
				return change;
			});
			setVoteCount((voteCount) => voteCount + change);
			patchVotes(article.article_id, change);
		} else {
			setVoteChange(() => 0);
			setVoteCount((voteCount) => voteCount + change);
			patchVotes(article.article_id, change);
		}
	};
	return (
		<div className="article-votes">
			<button
				onClick={() => {
					handleVote(1);
				}}
			>
				{voteChange === 1 ? (
					<i id="upvote-after" className="fa-solid fa-thumbs-up fa-xl"></i>
				) : (
					<i className="fa-solid fa-thumbs-up fa-xl"></i>
				)}
			</button>
			<h3>{voteCount}</h3>
			<button
				onClick={() => {
					handleVote(-1);
				}}
			>
				{voteChange === -1 ? (
					<i id="downvote-after" className="fa-solid fa-thumbs-down fa-xl"></i>
				) : (
					<i className="fa-solid fa-thumbs-down fa-xl"></i>
				)}
			</button>
		</div>
	);
};

export default PageVotes;
