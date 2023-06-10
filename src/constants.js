export const DIFFICULTY = {
  EASY: 'Easy',
  MEDIUM: 'Medium',
  HARD: 'Hard'
}

export const PLAYER_COLOURS = {
  Green: 'Green',
  Yellow: 'Yellow',
  Purple: 'Purple',
  Blue: 'Blue',
  Pink: 'Pink',
}

export const COLOURS = {
  app: {
    shadow: '#999',
    offWhite: '#f1f1f1',
    offWhiteDivider: '#d1d1d1'
  },
  player: {
    [PLAYER_COLOURS.Green]: '#95c13c',
    [PLAYER_COLOURS.Yellow]: '#eac816',
    [PLAYER_COLOURS.Purple]: '#4b4082',
    [PLAYER_COLOURS.Blue]: '#44bac3',
    [PLAYER_COLOURS.Pink]: '#893f94'
  },
  [DIFFICULTY.EASY]: {
    light: '#24743a',
    dark: '#004c2c'
  },
  [DIFFICULTY.MEDIUM]: {
    light: '#195574',
    dark: '#1c3146'
  },
  [DIFFICULTY.HARD]: {
    light: '#861435',
    dark: '#4e0914'
  },
  circle: '#24743a',
  cross: '#861435'
}

export const CARD_COLOURS = {
  PINK: 'Pink',
  PURPLE: 'Purple',
  YELLOW: 'Yellow',
  RED: 'Red'
}

export const CARD_SHAPES = {
  CLUB: 'Club',
  DIAMOND: 'Diamond',
  HEART: 'Heart',
  SPADE: 'Spade'
}

export const easyOptions = () => {
  const values = Object.values(CARD_COLOURS);
  return [createOptions(values)]
}

export const mediumOptions = () => {
  const colours = Object.values(CARD_COLOURS);
  const shapes = Object.values(CARD_SHAPES);

  return [createOptions(colours), createOptions(shapes)]
}

export const hardOptions = () => {
  const values = [...Object.values(CARD_SHAPES), ...Object.values(CARD_COLOURS)]
  return [createOptions(values)]
}

function createOptions(values) {
  return values.map((v, index) => {
    const vMatches = []
    for (let i = values.length - 1; i >= index; i--) {
      vMatches.push({
        type1: v,
        type2: values[i]
      })
    }
    return vMatches;
  })
}


export const BOX_CHECK_STATE = {
  BLANK: 1,
  CROSS: 2,
  CIRCLE: 3
}

export const getNextBoxState = (currentState) => {
  if (!currentState) return BOX_CHECK_STATE.CROSS;
  if (currentState === BOX_CHECK_STATE.CIRCLE) return BOX_CHECK_STATE.BLANK;
  return currentState + 1;
}