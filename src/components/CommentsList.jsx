import { fetchComments } from "../api";
import AddComment from "./AddComment";
import CommentCard from "./CommentCard";
import { useEffect, useState } from "react";

const CommentsList = ({ article: { article_id, comment_count } }) => {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [commentAdded, setCommentAdded] = useState(false);

	useEffect(() => {
		fetchComments(article_id).then((comments) => {
			setComments(comments);
			setIsLoading(false);
			setCommentAdded(false);
		});
	}, [article_id, commentAdded]);

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
					<section>
						<AddComment
							article_id={article_id}
							setCommentAdded={setCommentAdded}
							commentAdded={commentAdded}
						/>
					</section>
					{comments.map((comment) => {
						return <CommentCard key={comment.comment_id} comment={comment} />;
					})}
				</>
			)}
		</section>
	);
};

export default CommentsList;
