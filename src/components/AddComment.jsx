import { useState } from "react";
import { postComment } from "../api";

const AddComment = (props) => {
	const [userComment, setUserComment] = useState({
		username: "cooljmessy",
		body: "",
	});
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = (event) => {
		if (userComment.body === "") {
			event.preventDefault();
			setErrorMessage("Error: Comment Cannot Be Blank");
		} else {
			event.preventDefault();
			postComment(props.article_id, userComment)
				.then(setErrorMessage("Comment Successfully Posted"))
				.then(props.setCommentAdded(true))
				.then(handleReset())
				.then(props.setCommentCount(props.commentCount + 1));
		}
	};

	const handleReset = () => {
		setUserComment({
			username: "cooljmessy",
			body: "",
		});
	};

	return (
		<form className="add-comment">
			<label>Leave A Comment</label>
			<div className="add-comment-area">
				<textarea
					name="comment-field"
					id="comment-field"
					type="textarea"
					value={userComment.body}
					required
					placeholder="Enter Your Comment..."
					onChange={(event) => {
						setUserComment({ ...userComment, body: event.target.value });
					}}
				></textarea>
				<h4>{errorMessage}</h4>
			</div>
			<button type="submit" onClick={handleSubmit}>
				Post Comment
			</button>
		</form>
	);
};

export default AddComment;
