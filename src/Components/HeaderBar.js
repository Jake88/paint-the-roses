import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef } from 'react';
import Styled, { css } from 'styled-components';
import { COLOURS } from '../constants';
import { gameActions } from '../GameReducer/game.actions';
import { useGameReducer } from '../GameReducer/game.context';
import { Menu } from './Menu/Menu';


export const HeaderBar = () => {
  const { dispatch, store: {
    currentPlayer,
    players
  } } = useGameReducer();

  const { isMenuOpen, toggleMenu } = useMenuHandler();

  return (
    <>
      <Wrapper>
        <MenuButton onClick={() => toggleMenu(true)}>
          <FontAwesomeIcon icon={faBars} />
          Menu
        </MenuButton>

        {Object.values(players).map(({ name, colour }) => (
          <NameButton
            key={name + colour}
            colour={colour}
            selected={currentPlayer === name}
            onClick={() => {
              dispatch(gameActions.setCurrentPlayer(name));
            }}
          >
            {name}
          </NameButton>
        ))}

      </Wrapper>
      <Menu isOpen={isMenuOpen} close={() => toggleMenu(false)} />
    </>
  )
}


const useMenuHandler = () => {
  const { store: { isMenuOpen }, dispatch } = useGameReducer();
  const isMenuOpenRef = useRef(false);

  const toggleMenu = (open) => {
    setTimeout(() => {
      dispatch(open ? gameActions.openMenu() : gameActions.closeMenu());
    })
  }

  useEffect(() => {
    isMenuOpenRef.current = isMenuOpen;
  }, [isMenuOpen])

  useEffect(() => {
    function menuCloser(e) {
      if (isMenuOpenRef.current && !document.getElementById('menu')?.contains(e.target)) {
        toggleMenu(false);
      }
    }

    window.addEventListener('click', menuCloser);
    return () => window.removeEventListener('click', menuCloser);
  }, [])

  return { isMenuOpen, toggleMenu }
}

const Wrapper = Styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  box-shadow: 0 2px 4px ${COLOURS.app.shadow};
  background-color: ${COLOURS.app.offWhite};
  position: relative;
  z-index: 1;
`

const MenuButton = Styled.button`
  position: relative;
  border-bottom: 1px solid ${COLOURS.app.offWhiteDivider};
  padding: 0 16px;
  height: 44px;
  font-size: 18px;
  text-align: left;
  &:hover {
    background-color: ${COLOURS.app.offWhiteDivider};
  }
  & svg {
    margin-right: 8px;
  }
`

const NameButton = Styled.button`
  & + & {
    border-top: 1px solid ${COLOURS.app.offWhiteDivider};
  }
  line-height: 44px;
  font-size: 22px;
  text-align: center;
  color: ${({ colour }) => COLOURS.player[colour]};
  padding: 0 24px;
  transition: all 200ms ease;
  ${({ selected }) => selected && css`
    color: white;
    background-color: ${({ colour }) => COLOURS.player[colour]};
  `}
`
