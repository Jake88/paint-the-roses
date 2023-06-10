import Styled, { css } from 'styled-components';
import { BOX_CHECK_STATE, COLOURS } from '../../constants';
import { playerActions } from '../../GameReducer/game.actions';
import { useGameReducer } from '../../GameReducer/game.context';
import { BoxCss } from './Grid';

const Checkbox = Styled.button`
  ${({ size }) => BoxCss(size)};
  background-color: white;
  transition: background-color 500ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: cursive;
  font-weight: bold;
  font-size: 2em;
  color: white;
  padding-bottom: 2px;

  border-left: 1px solid #aaa;
  border-right: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  border-top: ${({ $isTopRowBox }) => $isTopRowBox ? `1px solid #aaa` : 'none'};

  & + & {
    border-left: none;
  }

  ${({ checked }) => {
    if (checked === BOX_CHECK_STATE.CROSS) {
      return css`
        color: ${COLOURS.cross};
        &::before{
          content: "X";
        }
      `
    } else if (checked === BOX_CHECK_STATE.CIRCLE) {
      return css`
        color: ${COLOURS.circle};
        &::before{
          content: "O";
        }
      `
    }
  }}
`

export const Box = ({ id, size, isTopRowBox }) => {
  const { store: { players, currentPlayer }, dispatch } = useGameReducer();
  const { checkedStates } = players[currentPlayer];

  return <Checkbox
    $isTopRowBox={isTopRowBox}
    size={size}
    checked={checkedStates[id]}
    onClick={(e) => dispatch(playerActions.interateBoxState(id))} />
}