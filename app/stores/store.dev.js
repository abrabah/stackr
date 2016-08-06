import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/';
import DevTools from '../containers/DevTools'


const enhancer = compose(
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
);


export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        enhancer
    );

    if (module.hot) {
        module.hot.accept('../reducers', () =>
            store.replaceReducer(require('../reducers/index')/*.default if you use Babel 6+ */)
        );
    }
    return store;
}
