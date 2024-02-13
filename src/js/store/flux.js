const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
		},
		actions: {
			getAllCharacters: () => {
				fetch(`https://www.swapi.tech/api/people/`).then(data => data.json())
				.then(data => setStore({people:data}))
			},
			getAllPlanets: () => {
				fetch(`https://www.swapi.tech/api/planets/`).then(data => data.json())
				.then(data => setStore({planets:data}))
			},
			getAllVehicles: () => {
				fetch(`https://www.swapi.tech/api/vehicles/`).then(data => data.json())
				.then(data => setStore({vehicles:data}))
			},
			}
		}
	};

export default getState;
