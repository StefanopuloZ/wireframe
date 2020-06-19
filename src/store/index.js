import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

export { store as default };


// import createSagaMiddleware from 'redux-saga';
// import {applyMiddleware, createStore} from 'redux';
// import logger from 'redux-logger';
// import rootReducer from '../reducers';
// import rootSaga from '../sagas';
// import AuthService from '../services/AuthService';
// import {DictionaryService} from '../services/DictionaryService';

// const sagaMiddleware = createSagaMiddleware();

// const store = createStore(
//     rootReducer,
//     {
//         UserAuthReducer: AuthService.getUserData(),
//         LocalisationReducer: DictionaryService.getLocaleData(),
//     },
//     applyMiddleware(sagaMiddleware, logger)
// );

// sagaMiddleware.run(rootSaga);

// export {store as default};
