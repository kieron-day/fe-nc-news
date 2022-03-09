import { useState } from "react";
import { postComment } from "../api";

const AddComment = (props) => {
	const [userComment, setUserComment] = useState({
		username: "cooljmessy",
		body: "",
	});
	const handleSubmit = (event) => {
		event.preventDefault();
		postComment(props.article_id, userComment);
		props.setCommentAdded(true);
		setUserComment({
			username: "cooljmessy",
			body: "",
		});
	};

	return (
		<form>
			<label>Leave A Comment</label>
			<input
				name="comment-field"
				id="comment-field"
				type="textarea"
				placeholder="Enter Your Comment"
				value={userComment.body}
				onChange={(event) => {
					setUserComment({ ...userComment, body: event.target.value });
				}}
			></input>
			<button type="submit" onClick={handleSubmit}>
				Post Comment
			</button>
		</form>
	);
};

export default AddComment;
