import { useState } from "react";
import { postComment } from "../api";

const AddComment = (props) => {
	const [userComment, setUserComment] = useState({
		username: "cooljmessy",
		body: "",
	});

	const handleSubmit = (event) => {
		if (userComment.body === "") {
			event.preventDefault();
			document.getElementById("error-message").innerHTML =
				"Error: Comment Cannot Be Blank";
		} else {
			event.preventDefault();
			postComment(props.article_id, userComment);
			props.setCommentAdded(true);
			setUserComment({
				username: "cooljmessy",
				body: "",
			});
			handleReset();
			document.getElementById("error-message").innerHTML =
				"Comment Successfully Added";
			props.setCommentCount(props.commentCount + 1);
		}
	};

	const handleReset = () => {
		document.getElementById("comment-field").value = "";
	};

	return (
		<form className="add-comment">
			<label>Leave A Comment</label>
			<div className="add-comment-area">
				<textarea
					name="comment-field"
					id="comment-field"
					type="textarea"
					required
					placeholder="Enter Your Comment..."
					onChange={(event) => {
						setUserComment({ ...userComment, body: event.target.value });
					}}
				></textarea>
				<label className="error-message" id="error-message"></label>
			</div>
			<button type="submit" onClick={handleSubmit}>
				Post Comment
			</button>
		</form>
	);
};

export default AddComment;
