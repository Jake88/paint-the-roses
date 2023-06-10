
import { DIFFICULTY, createGridState, APP_VERSION, DEBUG_MODE } from '../constants';
import {
  GAME_TYPE,
  PLAYER_TYPE
} from './game.actions'
import { getNextBoxState } from '../constants'

export const initialState = {
  isMenuOpen: false,
  currentPlayer: '',
  players: {},
  version: APP_VERSION
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // GAME ACTIONS.
    case GAME_TYPE.TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: action.flag
      }
    case GAME_TYPE.SET_CURRENT_PLAYER:
      return {
        ...state,
        currentPlayer: action.playerName
      }
    case GAME_TYPE.ADD_PLAYER:
      return {
        ...state,
        currentPlayer: action.playerName,
        players: {
          ...state.players,
          [action.playerName]: {
            name: action.playerName,
            colour: action.playerColour,
            difficulty: DIFFICULTY.MEDIUM,
            checkedStates: {}
          }
        }
      };
    case GAME_TYPE.RESET:
      return { ...initialState };
    case GAME_TYPE.REMOVE_PLAYER:
      delete state.players[action.playerName];
      return { ...state };

    // PLAYER ACTIONS.
    case PLAYER_TYPE.SET_DIFFICULTY:
      return {
        ...state,
        players: {
          ...state.players,
          [state.currentPlayer]: {
            ...state.players[state.currentPlayer],
            difficulty: action.difficulty,
            checkedStates: {}
          }
        }
      };
    case PLAYER_TYPE.UPDATE_BOX_STATE:
      return {
        ...state,
        players: {
          ...state.players,
          [state.currentPlayer]: {
            ...state.players[state.currentPlayer],
            checkedStates: {
              ...state.players[state.currentPlayer].checkedStates,
              [action.boxId]: getNextBoxState(state.players[state.currentPlayer].checkedStates[action.boxId])
            }
          }
        }
      };
    default:
      return state
  }
}

const reducerWithLogs = (reducer) => (state = initialState, action) => {
  const nextState = reducer(state, action);

  if (DEBUG_MODE) {
    console.group('GameReducer');
    console.log('(previous) STATE:', state);
    console.log('ACTION:', action);
    console.log('(next) STATE:', nextState);
    console.groupEnd();
  }

  localStorage.setItem('thestore', JSON.stringify(nextState));

  return nextState;
}

export const gameReducer = reducerWithLogs(reducer);