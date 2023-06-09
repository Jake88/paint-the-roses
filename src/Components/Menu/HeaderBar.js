import { useState, useEffect, useRef, useContext } from 'react';
import Styled from 'styled-components';
import { COLOURS } from '../../constants';
import { gameActions } from '../../GameReducer/game.actions';
import { useGameReducer } from '../../GameReducer/game.context';
import { Menu } from './Menu';


export const HeaderBar = () => {
  const { store: {
    currentPlayer,
    players
  } } = useGameReducer();

  const { isMenuOpen, toggleMenu } = useMenuHandler();

  console.log('players[currentPlayer]', players[currentPlayer])

  return (
    <>
      <Bar>
        <MenuButton onClick={() => toggleMenu(true)} />
        <Name style={{ color: COLOURS.player[players[currentPlayer]?.colour] }}>{currentPlayer}</Name>

      </Bar>
      <Menu isOpen={isMenuOpen} close={() => toggleMenu(false)} />
    </>
  )
}


const useMenuHandler = () => {
  const { store: { isMenuOpen }, dispatch } = useGameReducer();
  const isMenuOpenRef = useRef(false);

  const toggleMenu = (open) => {
    setTimeout(() => {
      const action = !open ? gameActions.closeMenu() : gameActions.openMenu();
      dispatch(action);
      isMenuOpenRef.current = open;
    })
  }

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

const Bar = Styled.div`
  height: 44px;
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  box-shadow: 0 2px 4px ${COLOURS.app.shadow};
  background-color: ${COLOURS.app.offWhite};
`

const MenuButton = Styled.button`
  border-right: 1px solid ${COLOURS.app.offWhiteDivider};
  padding: 0 16px;
  &:hover {
    background-color: ${COLOURS.app.offWhiteDivider};
  }
  &:before {
    content: "Menu"
  }
`

const Name = Styled.h1`
  position: absolute;
  width: 100%;
  line-height: 44px;
  font-size: 22px;
  margin: 0;
  padding: 0;
  text-align: center;
  pointer-events: none;
`
