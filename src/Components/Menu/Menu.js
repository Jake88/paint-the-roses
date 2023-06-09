import Styled, { css } from 'styled-components';
import { useState } from 'react';
import { COLOURS } from '../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { AddPlayerSection } from './AddPlayerSection';

export const Menu = ({ isOpen, close }) => {
  const [addPlayerOpen, setAddPlayerOpen] = useState(false);

  return (
    <MenuWrapper id='menu' $isOpen={isOpen}>
      <MenuOption text='Add player' icon={faUser} onClick={
        () => setAddPlayerOpen(!addPlayerOpen)
      } />
      <AddPlayerSection isOpen={addPlayerOpen} close={() => setAddPlayerOpen(false)} />

    </MenuWrapper>
  )
}

const MenuOption = ({ icon, text, onClick }) => (
  <MenuButton onClick={onClick}><FontAwesomeIcon icon={icon} />{text}</MenuButton>
)


const MenuWrapper = Styled.div`
  position: absolute;
  top: 44px;
  left: 0;
  width: 80%;
  height: calc(100% - 44px);
  background-color: ${COLOURS.app.offWhite};
  border-top: 1px solid ${COLOURS.app.offWhiteDivider};
  border-right: 1px solid ${COLOURS.app.offWhiteDivider};
  box-shadow: 2px 4px 4px ${COLOURS.app.shadow};
  transform: translateX(-110%);
  transition: all 300ms ease;
  pointer-events: none;

  ${({ $isOpen }) => $isOpen && css`
    transform: translateX(0%);
    pointer-events: initial;
  `}
`

const MenuButton = Styled.button`
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
`
