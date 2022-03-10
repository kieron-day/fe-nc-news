import { deleteComment } from "../api";
import { useState } from "react";

const CommentCard = (props) => {
	const [deleteButton, setDeleteButton] = useState(false);
	const getDate = (comment) => {
		const getTime = comment.created_at.slice(11, 16);
		const getDay = comment.created_at.slice(8, 10);
		const getMonth = comment.created_at.slice(5, 7);
		const getYear = comment.created_at.slice(0, 4);
		return `${getDay}/${getMonth}/${getYear} - ${getTime}`;
	};

	const handleDelete = () => {
		setDeleteButton(true);
		deleteComment(props.comment.comment_id).then(props.setCommentUpdated(true));
	};

	return (
		<article className="comment">
			<section className="comment-left-side">
				<i className="fa-solid fa-user"></i>
				<h3 className="comment-author">{props.comment.author}</h3>
				<h3 className="comment-date">{getDate(props.comment)}</h3>
			</section>
			<h3 className="comment-body">{props.comment.body}</h3>
			{console.log(props.user)}
			{console.log(props.comment.author)}
			{props.user === props.comment.author ? (
				<>
					<button disabled={deleteButton} onClick={handleDelete}>
						<i className="fa-solid fa-trash-can"></i>
					</button>
				</>
			) : null}
		</article>
	);
};

export default CommentCard;
