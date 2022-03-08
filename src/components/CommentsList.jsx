import { fetchComments } from "../api";
import CommentCard from "./CommentCard";
import { useEffect, useState } from "react";

const CommentsList = ({ article: { article_id, comment_count } }) => {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchComments(article_id).then((comments) => {
			setComments(comments);
			setIsLoading(false);
		});
	}, [article_id]);

	return (
		<section>
			{isLoading ? (
				<p>Loading Comments...</p>
			) : (
				<>
					<div className="article-comments">
						<i className="fa-solid fa-comment fa-xl"></i>
						<h2>{`Comments (${comment_count})`} </h2>
					</div>
					{comments.map((comment) => {
						return <CommentCard key={comment.comment_id} comment={comment} />;
					})}
				</>
			)}
		</section>
	);
};

export default CommentsList;
