import { createContext, useContext, useReducer } from 'react';
import { APP_VERSION } from '../constants';
import { initialState, gameReducer } from './game.reducer';

const GameContext = createContext({
  store: initialState,
  dispatch: () => { }
});

const recoveredStore = JSON.parse(localStorage.getItem('thestore'));
const forceReset = recoveredStore.version !== APP_VERSION;

if (recoveredStore && recoveredStore.version && forceReset) {
  console.warn(`Version ${recoveredStore.version} found in local storage. This is incompatible with new changes found in version ${APP_VERSION}, so starting from scratch.`)
}

export const GameReducerProvider = ({ children }) => {


  const [store, dispatch] = useReducer(gameReducer, forceReset ? initialState : recoveredStore);

  return (
    <GameContext.Provider value={{
      store, dispatch
    }}>
      {children}
    </GameContext.Provider>
  )
}

export const withGameReducerProvider = (Component) => () => {
  return <GameReducerProvider><Component /></GameReducerProvider>
}

export const useGameReducer = () => {
  return useContext(GameContext);
}