import Vue from "vue";
import Vuex from "vuex";
import Sdg from "./data/vuex/sdg-module";
import Article from "./data/vuex/article-module";


Vue.use(Vuex);

const store = new Vuex.Store({
	modules:{
		sdg: Sdg,
		article: Article,
	}
});

export default store;
