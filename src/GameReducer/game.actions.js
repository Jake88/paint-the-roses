export const GAME_TYPE = {
  ADD_PLAYER: 'GAME/ADD_PLAYER',
  REMOVE_PLAYER: 'GAME/REMOVE_PLAYER',
  RESET: 'GAME/RESET',
  SET_CURRENT_PLAYER: 'GAME/SET_CURRENT_PLAYER',
  TOGGLE_MENU: 'GAME/TOGGLE_MENU'
}

export const PLAYER_TYPE = {
  SET_DIFFICULTY: 'PLAYER/SET_DIFFICULTY',
  UPDATE_BOX_STATE: 'PLAYER/UPDATE_BOX_STATE'
}

export const gameActions = {
  addPlayer: (playerName, playerColour) => ({ type: GAME_TYPE.ADD_PLAYER, playerName, playerColour }),
  setCurrentPlayer: (playerName) => ({ type: GAME_TYPE.SET_CURRENT_PLAYER, playerName }),
  closeMenu: () => ({ type: GAME_TYPE.TOGGLE_MENU, flag: false }),
  openMenu: () => ({ type: GAME_TYPE.TOGGLE_MENU, flag: true }),
  reset: () => ({ type: GAME_TYPE.RESET })
}

export const playerActions = {
  changeDifficulty: (difficulty) => ({ type: PLAYER_TYPE.SET_DIFFICULTY, difficulty }),
  interateBoxState: (boxId) => ({ type: PLAYER_TYPE.UPDATE_BOX_STATE, boxId })
}