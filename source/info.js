// region import

// endregion

// region routes

export default ({api, config}) => ({
	name: 'to-nedb',
	routes: [],
	subscribe: {
		user: async (method, id, data) => {
			console.log(method, id, data)
		}
	},
	provide: {
		user: async (find) => {
			return {
				name: 'admin',
				salt: 'salty',
				hash: 'LtHR+Ci8gJAtWTZ6NwsRgCVTy4PjSE1ToG/EPt8XuZM/HVXQ4etDr26/SctVuDJ0I+ZJ5/0KVYL2xxUedRvoQiUapldR//DRPEGEv2lX6/bmaWFbxX3kYYyRP5hs00waoCZKpIkw7pMUbq/xh4USPuC2SxETx8DtFxYY9KzVNVTxYVxDSMGjXp1RAuJ5xIa7GJ92enwa+t42jqp5Qaugw3e8fkfE8n4M8TymEL/ANpA/1i3DXEz4upEvdsWwIh8quHykmdQaxHS5RxCq7/ztcltxtMc4gqkGK4wyfO7dX1CzLUv+VyzSsBdYakQTdl5Nr95Z+rNIRqa7Lw4MBRF/E1LqnWB8mtzAxGQt/YwqqtWxOL7Eibhjbc57Ezf9/DboqiO52g9EXxV8fJZwc5Ud/0bX8dGwjOWO0QOizy591VTf1UcFKG/rOTUJB20hxjMvrxzC9Hgjw/SWop1JlNPpIYfseNylDwmTPQbLtxiOSkDcRROO+Tr+kbCVl4IcnIAHDRBZf+LXJqnHJKEktbzv/moCxg2myLs8W8fcED82i8eB4yLveEInTmFL3Nyj/qXsMQfNGR+bEdaFZoP6dZ9XKzquNglkvbu8BYCBFrL5UX0RcnRwyop1QqaCOUJ4ejlwzL9wCdneAd7WIvTLXBu6cS9FzN+46qmQuQCLTsc9V1Q='
			}
		}
	}
})

// endregion
