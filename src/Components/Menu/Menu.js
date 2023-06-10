import Styled, { css, keyframes } from 'styled-components';
import { useState } from 'react';
import { COLOURS } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb, faChevronRight, faUser, faUserPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

import { AddPlayerSection } from './AddPlayerSection';
import { useGameReducer } from '../../GameReducer/game.context';
import { gameActions } from '../../GameReducer/game.actions';

const RESET_TIME = 5000;

export const Menu = ({ isOpen, close }) => {
  const { store: { players }, dispatch } = useGameReducer();

  const [resetTimer, setResetTimer] = useState();

  return (
    <MenuWrapper id='menu' $isOpen={isOpen}>
      <MenuOption text='Add a new player' icon={faUserPlus} />
      <AddPlayerSection />

      {Object.values(players).map(({ name, colour }) => (
        <MenuOption
          key={name + colour}
          text={`View ${name}'s clues`}
          icon={faUser}
          colour={colour}
          suffixIcon={faChevronRight}
          onClick={() => {
            dispatch(gameActions.setCurrentPlayer(name));
            close();
          }
          }
        />
      ))}

      <MenuOption text={resetTimer ? 'Are you sure?' : 'Reset everything'} icon={faBomb} onClick={() => {
        if (resetTimer) {
          dispatch(gameActions.reset());
          setResetTimer(false);
        } else {
          setResetTimer(true);
          setTimeout(() => setResetTimer(false), 5000);
        }
      }} />
      {resetTimer && <ResetTimerBar />}
    </MenuWrapper>
  )
}

const MenuOption = ({ icon, text, onClick, suffixIcon, colour }) => (
  <MenuButton onClick={onClick} $colour={COLOURS.player[colour]}>
    <FontAwesomeIcon icon={icon} />
    <span style={{ flexGrow: '1' }}>{text}</span>
    {suffixIcon && <FontAwesomeIcon icon={suffixIcon} size='lg' />}
  </MenuButton>
)


const MenuWrapper = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  background-color: ${COLOURS.app.offWhite};
  border-top: 1px solid ${COLOURS.app.offWhiteDivider};
  border-right: 1px solid ${COLOURS.app.offWhiteDivider};
  box-shadow: 0 0 1000px black;
  transform: translateX(-140%);
  transition: all 300ms ease;
  pointer-events: none;
  z-index: 10;

  ${({ $isOpen }) => $isOpen && css`
    transform: translateX(0%);
    pointer-events: initial;
  `}
`

const MenuButton = Styled.button`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${COLOURS.app.offWhiteDivider};
  padding: 8px 16px;
  width: 100%;
  text-align: left;
  &:hover {
    background-color: ${COLOURS.app.offWhiteDivider};
  }
  & svg {
    margin-right: 8px;
  }

  ${({ $colour }) => $colour && css`
    color: ${$colour} !important;
  `}
`

const timerAnimationFrames = keyframes`
  from { transform: scaleX(1); }
  to { transform: scaleX(0); }
`

const ResetTimerBar = Styled.div`
  width: 100%;
  height: 8px;
  background-color: #333;
  transform-origin: left;
  transform: scaleX(0);
  animation: ${timerAnimationFrames} ${RESET_TIME}ms linear;
`