import { useState } from 'react';
import Styled, { css } from 'styled-components';
import { useGameReducer } from '../GameReducer/game.context';
import { COLOURS, DIFFICULTY } from '../constants';
import { playerActions } from '../GameReducer/game.actions';

export const DifficultyPicker = ({ currentDifficulty }) => {
  const { dispatch } = useGameReducer();

  return (
    <DifficultyList>
      {Object.values(DIFFICULTY).map((difficulty) =>
        <DifficultyButton
          key={`difficulty-button-${difficulty}`}
          difficulty={difficulty}
          selected={currentDifficulty === difficulty}
          onClick={() => {
            dispatch(playerActions.changeDifficulty(difficulty));
          }}
        >
          {currentDifficulty === difficulty ? 'Click to clear' : difficulty}
        </DifficultyButton>
      )}
    </DifficultyList>
  )
}


const DifficultyList = Styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  box-shadow: 0 -2px 4px ${COLOURS.app.shadow};
`

const DifficultyButton = Styled.button`
  border: none;
  background-color: white;
  padding: 8px;
  color: ${({ difficulty }) => COLOURS[difficulty].light};
  height: 60px;
  
  & + & {
    margin-left: 16px;
  }

  transition: all 200ms ease;
  
  ${({ selected }) => selected && css`
    background-color: ${({ difficulty }) => COLOURS[difficulty].dark};
    color: white;
    flex-grow: 1;
  `}
`