import { getAllGoals, getSingleGoal, getGoalAreas } from "../../data/api/sdg-api";
import { getRandomNumber } from "../../helpers/random";

const namespaced = true;

const state = {
	goal: null,
	allGoals: [],
	area: null,
	loadingGoal: false
};
const getters = {
	getGoal: state => state.goal,
	getAllGoals: state => state.allGoals,
	getArea: state => state.area,
	getGoalStatus: state => state.loadingGoal
};
const mutations= {
	setGoal: (state, goal) => {
		state.goal = goal;
	},
	setAllGoals: (state, goals) => {
		state.allGoals = goals;
	},
	setArea: (state, area) => {
		state.area = area;
	},
	getGoalStatus: (state, loadingGoal) => {
		state.loadingGoal = loadingGoal;
	}
};

const actions = {
	generate: async (context) => {
		let goals = context.getters["getAllGoals"];
		let randomGoalNumber = getRandomNumber(goals.length - 1);
		
		context.commit("getGoalStatus", true);
		await context.dispatch("fetchSingleGoal", randomGoalNumber);
		await context.dispatch("fetchSdgImpactAreas", randomGoalNumber + 1); // adds 1 to avoid 0 value in randomNumber variable
		context.commit("getGoalStatus", false);
		
		await context.dispatch("article/queryWeb", null, { root: true });
	},
	generateSelected: async (context, goal) => {
		context.commit("getGoalStatus", true);
		await context.dispatch("fetchSingleGoal", goal);
		await context.dispatch("fetchSdgImpactAreas", goal);
		context.commit("getGoalStatus", false);
		
		await context.dispatch("article/queryWeb", null, { root: true });
	},
	fetchAllGoals: async (context) => {
		context.commit("getGoalStatus", true);
		let response = await getAllGoals();
		context.commit("getGoalStatus", false);
		let sdg = response.data;
		context.commit("setAllGoals", sdg);
		return sdg;
	},
	fetchSingleGoal: async (context, goalNumber) => {
		let response = await getSingleGoal(goalNumber);
		let goal = response.data[0];
		context.commit("setGoal", goal);
		return goal;
	},
	fetchSdgImpactAreas: async (context, goalNumber) => {
		let response = await getGoalAreas(goalNumber);
		let sdgAreas = response.data;
		let randomArea = getRandomNumber(sdgAreas.length - 1);

		let area = sdgAreas[randomArea];
		let areaName = area.geoAreaName;
		context.commit("setArea", areaName);
		return areaName;
	}
};

export default {
	namespaced,
	state,
	getters,
	mutations,
	actions
};
