import axios from "axios";

export const getNews = async query =>{
	
	try {
		return await getNewsAPIFeed(query);
	} catch (error) {
		console.log(error);
	}

	try {
		return await getUsearchFeed(query);
	} catch (error) {
		console.log(error);
	}

	try {
		return await getNewsCatcherFeed(query);
	} catch (error) {
		console.log(error);
	}

	throw "failed to get any news feed";
};

/**
 * returns a list of search items that match query string
 * @param {String} - query
 */
const getNewsAPIFeed = async query => {

	try {
		let response = await axios.get(
			`https://newsapi.org/v2/everything?q=${query}`,
			{
				headers: {
					"Content-Type": "application/json",
					"X-Api-Key": process.env.VUE_APP_NEWS_API_KEY
				}
			}
		);

		if (response.status == 200){
			let list = response.data.articles;
			let articles = [];

			list.forEach(article => {
				articles.push({
					title: article.title,
					description: article.description,
					url: article.url,
					img: article.urlToImage
				});
			});
			return articles;
		}

		throw response;
	} catch (error) {
		throw { NewsApiError: error };
	}
};

/**
 * returns a list of search items that match query string
 * @param {String} - query
 */
const getUsearchFeed = async query => {

	try {
		let response = await axios.get(
			"https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI",
			{
				params: {
					q: query,
					pageNumber: "1",
					pageSize: "10",
					autoCorrect: "true",
					fromPublishedDate: "null",
					toPublishedDate: "null"
				},
				headers: {
					"Content-Type": "application/json",
					"x-rapidapi-key": process.env.VUE_APP_USEARCH_API_KEY,
					"x-rapidapi-host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
					useQueryString: true
				}
			}
		);

		if (response.status == 200){
			let list = response.data.value;
			let articles = [];

			list.forEach(article => {
				articles.push({
					title: article.title,
					description: article.description,
					url: article.url,
					img: article.media
				});
			});
			return articles;
		}

		throw response;
	} catch (error) {
		throw { UsearchError: error };
	}
};

/**
 * returns a list of search items that match query string
 * @param {String} - query
 */
const getNewsCatcherFeed = async query => {

	try {
		let response = await axios.get(
			"https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/search/NewsSearchAPI",
			{
				params: {
					q: query
				},
				headers: {
					"Content-Type": "application/json",
					"x-rapidapi-key": process.env.VUE_APP_NEWS_CATCHER_API_KEY,
					"x-rapidapi-host": "newscatcher.p.rapidapi.com",
					useQueryString: true
				}
			}
		);
		
		if (response.status == 200){
			let list = response.data.articles;
			let articles = [];
		
			list.forEach(article => {
				articles.push({
					title: article.title,
					description: article.summary,
					url: article.link,
					img: null
				});
			});
		
			return articles;
		}
		throw response;
	} catch (error) {
		throw { NewsCatcherApi: error };
	}
};

//https://newsapi.org/docs/get-started
