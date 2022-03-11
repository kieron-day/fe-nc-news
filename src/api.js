import axios from "axios";

const api = axios.create({
	baseURL: "https://nc-news-kd.herokuapp.com/api",
});

export const fetchTopics = () => {
	return api.get("/topics").then(({ data: { topics } }) => {
		return topics;
	});
};

export const fetchArticles = (topic, sortBy, order) => {
	return api
		.get("/articles", {
			params: {
				topic: topic,
				sort_by: sortBy,
				order: order,
			},
		})
		.then(({ data: { articles } }) => {
			return articles;
		});
};

export const fetchArticle = (article_id) => {
	return api.get(`/articles/${article_id}`).then(({ data: { article } }) => {
		return article;
	});
};

export const fetchComments = (article_id) => {
	return api
		.get(`/articles/${article_id}/comments`)
		.then(({ data: { comments } }) => {
			return comments;
		});
};

export const postComment = (article_id, commentObj) => {
	return api
		.post(`/articles/${article_id}/comments`, commentObj)
		.catch((err) => {
			console.log(err);
		});
};

export const deleteComment = (comment_id) => {
	return api.delete(`/comments/${comment_id}`).catch((err) => {
		console.log(err);
	});
};

export const patchVotes = (article_id, change) => {
	return api
		.patch(`/articles/${article_id}`, { inc_votes: change })
		.catch((err) => {
			console.log(err);
		});
};
