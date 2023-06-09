
import { DIFFICULTY, createGridState } from '../constants';
import {
  GAME_TYPE,
  PLAYER_TYPE
} from './game.actions'

export const initialState = {
  isMenuOpen: false,
  currentPlayer: '',
  players: {}
};

export const gameReducer = (state = initialState, action) => {
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
            gridState: createGridState(DIFFICULTY.MEDIUM)
          }
        }
      };
    case GAME_TYPE.CLEAR_PLAYERS:

      return {
        ...state,
        players: {}
      };
    case GAME_TYPE.REMOVE_PLAYER:
      delete state.players[action.playerName];
      return { ...state };

    // PLAYER ACTIONS.
    case PLAYER_TYPE.SET_DIFFICULTY:
      return {
        ...state,
        players: {
          ...state.players,
          [action.playerName]: {
            ...state.players[action.playerName],
            difficulty: action.difficulty,
            gridState: createGridState(action.difficulty)
          }
        }
      };
    case PLAYER_TYPE.SET_GRID_STATE:
      return {
        ...state,
        players: {
          ...state.players,
          [action.playerName]: {
            ...state.players[action.playerName],
            gridState: action.gridState
          }
        }
      };
    default:
      return state
  }
}