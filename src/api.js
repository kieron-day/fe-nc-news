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
