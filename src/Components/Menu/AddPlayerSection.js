import { useMemo, useState } from 'react';
import Styled, { css } from 'styled-components';
import { Textfield } from '../Common/Textfield';
import { useGameReducer } from '../../GameReducer/game.context';
import { COLOURS, PLAYER_COLOURS } from '../../constants';
import { RadioButton } from '../Common/Radiobutton';
import { gameActions } from '../../GameReducer/game.actions';

export const AddPlayerSection = () => {
  const { store: { players }, dispatch } = useGameReducer();
  const [playerName, setPlayerName] = useState('');
  const [playerColour, setPlayerColour] = useState('');

  const usedColours = useMemo(() => Object.values(players).map((p) => p.colour), [players]);

  const invalidForm = !playerName || !playerColour;

  return (
    <Wrapper >
      <RadioGroup>
        {Object.keys(PLAYER_COLOURS).map((colour) =>
          <ColourWrapper colour={PLAYER_COLOURS[colour]} disabled={usedColours.includes(colour)} key={colour}>
            <RadioButton
              group='player-colour'
              label={colour}
              value={colour}
              disabled={usedColours.includes(colour)}
              onChange={(colour) => {
                setPlayerColour(colour);
                if (!playerName || Object.values(PLAYER_COLOURS).includes(playerName)) {
                  setPlayerName(colour);
                }
              }} />
          </ColourWrapper>
        )}
      </RadioGroup>

      <Textfield label='Name' optional onChange={setPlayerName} value={playerName} />

      <Button colour={playerColour} disabled={invalidForm} onClick={() => {
        if (invalidForm) return;
        dispatch(gameActions.addPlayer(playerName, playerColour));
        setPlayerColour('');
        setPlayerName('');
      }}>Add player</Button>
    </Wrapper>
  )
}


const Wrapper = Styled.div`
  box-sizing: border-box;
  padding: 16px;
  border-bottom: 1px solid ${COLOURS.app.offWhiteDivider};
`

const ColourWrapper = Styled.div`
  opacity: ${({ disabled }) => disabled ? 0.4 : 1};
  border-left: 3px solid ${({ colour }) => COLOURS.player[colour]};
  border-right: 3px solid ${({ colour }) => COLOURS.player[colour]};
  padding: 0 8px;
  margin-bottom: 4px;
  border-radius: 4px;
  background-color: white;
  width: 100%;
`

const RadioGroup = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const Button = Styled.button`
  height: 44px;
  width: 100%;
  border-radius: 4px;
  margin-top: 8px;
  background-color: ${({ colour, disabled }) => !disabled && COLOURS.player[colour] ? COLOURS.player[colour] : COLOURS.app.offWhiteDivider};
  color: white;
  text-shadow: 0 -1px 1px rgba(0,0,0,.5);
  transition: all 100ms ease;

  ${({ disabled }) => !disabled && css`
    box-shadow: 0 -2px 4px rgba(0,0,0,.4);

    &:hover {
      box-shadow: 0 -1px 2px rgba(0,0,0,.3);
    }
  `}
`