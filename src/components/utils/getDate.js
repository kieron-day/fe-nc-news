export const getDate = (article) => {
	const getDay = article.created_at.slice(8, 10);
	const getMonth = article.created_at.slice(5, 7);
	const getYear = article.created_at.slice(0, 4);
	return `${getDay}/${getMonth}/${getYear}`;
};
