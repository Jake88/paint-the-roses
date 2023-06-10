import { createContext, useContext, useReducer } from 'react';
import { initialState, gameReducer } from './game.reducer';

const GameContext = createContext({
  store: initialState,
  dispatch: () => { }
});

const recoveredStore = JSON.parse(localStorage.getItem('thestore'));

export const GameReducerProvider = ({ children }) => {
  const [store, dispatch] = useReducer(gameReducer, recoveredStore || initialState);

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