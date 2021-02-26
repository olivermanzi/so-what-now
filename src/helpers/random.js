/**
 * retrns a random number starting from 0 to max
 * @param {Number} max 
 * @returns {Number}
 */
export const getRandomNumber = (max) =>{
	return Math.floor(Math.random() * Math.floor(max));
};
