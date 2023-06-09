import { useState } from 'react';
import Styled, { css } from 'styled-components';
import { COLOURS, DIFFICULTY } from '../constants';

export const Grid = (playerName, playerColour) => {
  const [currentDifficulty, setCurrentDifficulty] = useState(DIFFICULTY.MEDIUM);

  return (
    <Centerer>
      <DifficultyList>
        {Object.values(DIFFICULTY).map((difficulty) => (
          <DifficultyButton
            key={`difficulty-button-${difficulty}`}
            difficulty={difficulty}
            selected={currentDifficulty === difficulty}
            onClick={() => {
              setCurrentDifficulty(difficulty);
            }}
          >
            {difficulty}
          </DifficultyButton>
        ))}
      </DifficultyList>
    </Centerer>
  )
}

const Centerer = Styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
`

const DifficultyList = Styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px auto;
`

const DifficultyButton = Styled.button`
  border: none;
  background-color: transparent;
  border-radius: 50%;
  padding: 8px;
  color: ${({ difficulty }) => COLOURS[difficulty].light};
  
  & + & {
    margin-left: 16px;
  }
  
  ${({ selected }) => selected && css`
    box-shadow: 0px 1px 2px ${COLOURS.app.shadow};
    background-color: ${({ difficulty }) => COLOURS[difficulty].dark};
    color: white;
  `}
`