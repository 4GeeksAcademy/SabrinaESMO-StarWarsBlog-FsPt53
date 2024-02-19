const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			characterDetails: [],
			planetDetails: [],
			vehicleDetails: [],
		},
		actions: {
			getAllCharacters: () => {
				fetch(`https://www.swapi.tech/api/people/`).then(data => data.json())
					.then(data => setStore({ people: data.results }))
			},

			getAllPlanets: () => {
				fetch(`https://www.swapi.tech/api/planets/`).then(data => data.json())
					.then(data => setStore({ planets: data.results }))
			},

			getAllVehicles: () => {
				fetch(`https://www.swapi.tech/api/vehicles/`).then(data => data.json())
					.then(data => setStore({ vehicles: data.results }))
			},

			addDetailToCharacters: (uid) => {
				fetch(`https://www.swapi.tech/api/people/${uid}`)
					.then(data => data.json())
					.then((data) => {
						let newCharacters = getStore().people.map(character => {
							if (character.uid === uid) {
								return Object.assign(character, data.result)
							}
							else
								return character
						})
						setStore({ people: newCharacters })
					})
			},

			addDetailToPlanets: (uid) => {
				fetch(`https://www.swapi.tech/api/planets/${uid}`)
					.then(data => data.json())
					.then((data) => {
						let newPlanets = getStore().planets.map(planets => {
							if (planets.uid === uid) {
								return Object.assign(planets, data.result)
							}
							else
								return planets
						})
						setStore({ planets: newPlanets })
					})
			},

			addDetailToVehicles: (uid) => {
				fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
					.then(data => data.json())
					.then((data) => {
						let newVehicles = getStore().vehicles.map(vehicles => {
							if (vehicles.uid === uid) {
								return Object.assign(vehicles, data.result)
							}
							else
								return vehicles
						})
						setStore({ vehicles: newVehicles })
					})
			},

		}
	}
};

export default getState;
