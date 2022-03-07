import axios from "axios";

const api = axios.create({
	baseURL: "https://nc-news-kd.herokuapp.com/api",
});

export const fetchTopics = () => {
	return api.get("/topics").then(({ data: { topics } }) => {
		return topics;
	});
};

export const fetchArticles = (topic) => {
	let queryStr = "/articles";
	if (topic) queryStr += `?topic=${topic}`;
	return api.get(queryStr).then(({ data: { articles } }) => {
		return articles;
	});
};
