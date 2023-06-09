import { useState } from 'react'
import Styled, { css } from 'styled-components';

const Checkbox = Styled.div`
  height: 42px;
  width: 44px;
  border: 1px solid #aaa;
  background-color: white;
  transition: all 500ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: cursive;
  font-weight: bold;
  font-size: 2em;
  color: white;
  padding-bottom: 2px;

  ${({ checked }) => checked && css`
    background-color: #999;
    &::before{
      content: "X";
    }
  `}
`

export const Box = ({ type1, type2, forceChecked }) => {
  const [checked, setChecked] = useState(false);

  return <Checkbox role='checkbox' checked={forceChecked || checked} onClick={(e) => setChecked(!checked)} />
}