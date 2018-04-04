import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

  switch (action.type) {
  case FETCH_WEATHER:
    // not using state.push because never update state directly, don't mnutate state
    // reducers return new state, DONT UPDATE existing state
    // concat creates new array, push modifies existing array
    // return state.concat([ action.payload.data ]); <== // equal to line 12
    return [ action.payload.data, ...state]; // [ city, city, city ] NOT [city, [ city ] ]
  }

  return state;
}
