import axios from "axios";

/**
 * returns a list of search items that match query string
 * @param {String} - query
 */
export const getNews = async query => {
	const API_KEY = process.env.VUE_APP_NEWS_API_KEY;
	try {
		let response = await axios.get(
			`https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`
		);
		console.log(response);
		if (response.status == 200) return Promise.resolve(response);
		throw Promise.reject(response);
	} catch (error) {
		throw Promise.reject(error);
	}
};

//https://newsapi.org/docs/get-started
