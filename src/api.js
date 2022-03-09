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
	console.log(commentObj);
	return api
		.post(`/articles/${article_id}/comments`, commentObj)
		.then((response) => {
			console.log(response);
		})
		.catch((err) => {
			console.log(err);
		});
};
