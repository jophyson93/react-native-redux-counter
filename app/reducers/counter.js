// ACTION TYPES
export const UPDATE_COUNTER = 'UPDATE_COUNTER'


// ACTION CREATORS
export function updateCounter() {
	return {
		type: UPDATE_COUNTER,
	}
}


// INITIAL STATE
const initialState = {
	counterValue: 0
}

// REDUCERS
export default
function counter(state = initialState, action) {
	switch(action.type) {
		case UPDATE_COUNTER:
			return {
				counterValue: state.counterValue + 1
			}
		default: 
			return state; 
	}
}
