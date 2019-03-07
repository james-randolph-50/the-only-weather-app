import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import fetchingData from '../reducers/fetchingDataReducer';
import weatherData from '../reducers/weatherDataReducer';
import route from '../reducers/routeReducer';

const middlewares = [thunk];


export default createStore(
    fetchingData,
    weatherData,
    route,
    applyMiddleware(...middlewares)
)

// store = {
//         fetchingData: true,
//         weatherData: {},
//         route: 'currently'
// }