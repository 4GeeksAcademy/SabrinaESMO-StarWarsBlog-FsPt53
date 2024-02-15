const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			characterDetails: [],
		},
		actions: {
			getAllCharacters: () => {
				fetch(`https://www.swapi.tech/api/people/`).then(data => data.json())
				.then(data => setStore({people:data.results}))
			},
			getAllPlanets: () => {
				fetch(`https://www.swapi.tech/api/planets/`).then(data => data.json())
				.then(data => setStore({planets:data.results}))
			},
			getAllVehicles: () => {
				fetch(`https://www.swapi.tech/api/vehicles/`).then(data => data.json())
				.then(data => setStore({vehicles:data.results}))
			},
			addDetailToCharacters: (uid) => {
				fetch(`https://www.swapi.tech/api/people/${uid}`)
				.then(data => data.json())
				.then((data) => {
					let newCharacters = getStore().people.map(character => {
						if (character.uid === uid){
							return Object.assign(character, data.result)
							}
						else 
						return character
					})
					setStore({people:newCharacters})
				})
			},
			getCharacter: (id) => {

			}
			}
		}
	};

export default getState;
