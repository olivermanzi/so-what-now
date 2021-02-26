import { getRandomNumber } from "../../helpers/random";
import { getNews } from "../api/news-api";

const namespaced = true;

const state = {
	article: null,
	loadingArticle: false
};
const getters = {
	getArticle: state => state.article,
	getArticleStatus: state => state.loadingArticle
};
const mutations = {
	setArticle: (state, article) => {
		state.article = article;
	},
	setArticleStatus: (state, loadingArticle) => {
		state.loadingArticle = loadingArticle;
	}
};

const actions = {
	queryWeb: async function(context) {
		let goal = context.rootGetters["sdg/getGoal"];
		let area = context.rootGetters["sdg/getArea"];
		
		let title = goal.title;
		if (title.length > 30) { //shorten string, if necessary
			title = title.substring(0, 30);
		}
		
		try {
			context.commit("setArticleStatus", true);
			let articles = await getNews(title, area);
			context.commit("setArticleStatus", false);

			let randomArticleIndex = getRandomNumber(articles.length - 1);
			let article = articles[randomArticleIndex];
			context.commit("setArticle", article);
		} catch (error) {
			console.log(error);
		}


	},
};

export default {
	namespaced,
	state,
	getters,
	mutations,
	actions
};
