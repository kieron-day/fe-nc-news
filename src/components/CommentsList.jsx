import { fetchComments } from "../api";
import AddComment from "./AddComment";
import CommentCard from "./CommentCard";
import { useEffect, useState } from "react";

const CommentsList = ({ article: { article_id, comment_count } }) => {
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [commentAdded, setCommentAdded] = useState(false);
	const [commentCount, setCommentCount] = useState(comment_count);

	useEffect(() => {
		fetchComments(article_id).then((comments) => {
			setComments(comments);
			setIsLoading(false);
			setCommentAdded(false);
		});
	}, [article_id, commentAdded, commentCount]);

	return (
		<section>
			{isLoading ? (
				<p>Loading Comments...</p>
			) : (
				<>
					<div className="article-comments">
						<i className="fa-solid fa-comment fa-xl"></i>
						<h2>Comments ({commentCount})</h2>
					</div>
					<section>
						<AddComment
							article_id={article_id}
							commentAdded={commentAdded}
							setCommentAdded={setCommentAdded}
							commentCount={commentCount}
							setCommentCount={setCommentCount}
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
