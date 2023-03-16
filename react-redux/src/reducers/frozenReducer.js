const testData = [
	{
		name: "Ope",
		quantity: 10,
	},
	{
		name: "Baracuda",
		quantity: 100,
	},
	{
		name: "snail",
		quantity: 150,
	},
];

export const frozenReducer = (state = testData, action) => {
	return state;
};
