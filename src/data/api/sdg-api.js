import axios from "axios";

/**
 * returns all sdg goals
 */
export let getAllGoals = async () => {
	try {
		let response = await axios.get(
			"https://unstats.un.org/sdgapi/v1/sdg/Goal/List"
		);
		if (response.status == 200) return Promise.resolve(response);
		return Promise.reject(response);
	} catch (error) {
		return Promise.reject(error);
	}
};

/**
 * returns data (and targets) for single sdg
 * @param {Number} sdg - sdg goal
 */
export let getSingleGoal = async (sdg) => {
	try {
		let response = await axios.get(
			`https://unstats.un.org/SDGAPI/v1/sdg/Goal/${sdg}/Target/List?includechildren=true`
		);
		if (response.status == 200) return Promise.resolve(response);
		return Promise.reject(response);
	} catch (error) {
		return Promise.reject(error);
	}
};

/**
 * returns geocodes that want to reach sdg
 * @param {Number} sdg - sdg goal
 */
export let getGoalAreas = async (sdg) => {
	try {
		let response = await axios.get(
			`https://unstats.un.org/SDGAPI/v1/sdg/Goal/${sdg}/GeoAreas`
		);
		if (response.status == 200) return Promise.resolve(response);
		return Promise.reject(response);
	} catch (error) {
		return Promise.reject(error);
	}
};
