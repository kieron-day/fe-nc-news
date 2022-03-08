const CommentCard = ({ comment }) => {
	const getDate = (comment) => {
		const getTime = comment.created_at.slice(11, 16);
		const getDay = comment.created_at.slice(8, 10);
		const getMonth = comment.created_at.slice(5, 7);
		const getYear = comment.created_at.slice(0, 4);
		return `${getDay}/${getMonth}/${getYear} - ${getTime}`;
	};

	return (
		<article className="comment">
			<section className="comment-top-row">
				<div className="comment-votes">
					<i className="fa-solid fa-thumbs-up fa-xl"></i>
					<h3>{comment.votes}</h3>
					<i className="fa-solid fa-thumbs-down fa-xl"></i>
				</div>
				<h3 className="comment-date">{getDate(comment)}</h3>
				<h3 className="comment-author">{comment.author}</h3>
			</section>
			<h3>{comment.body}</h3>
		</article>
	);
};

export default CommentCard;
