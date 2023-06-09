export const GAME_TYPE = {
  ADD_PLAYER: 'GAME/ADD_PLAYER',
  REMOVE_PLAYER: 'GAME/REMOVE_PLAYER',
  CLEAR_PLAYERS: 'GAME/CLEAR_PLAYERS',
  SET_CURRENT_PLAYER: 'GAME/SET_CURRENT_PLAYER',
  TOGGLE_MENU: 'GAME/TOGGLE_MENU'
}

export const PLAYER_TYPE = {
  SET_DIFFICULTY: 'PLAYER/SET_DIFFICULTY',
  SET_GRID_STATE: 'PLAYER/SET_GRID_STATE'
}

export const gameActions = {
  addPlayer: (playerName, playerColour) => ({ type: GAME_TYPE.ADD_PLAYER, playerName, playerColour }),
  closeMenu: () => ({ type: GAME_TYPE.TOGGLE_MENU, flag: false }),
  openMenu: () => ({ type: GAME_TYPE.TOGGLE_MENU, flag: true })
}