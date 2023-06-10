import { useMemo, useState } from 'react'
import Styled, { css } from 'styled-components'
import { COLOURS } from '../../constants'

const TextInputWrapper = Styled.div`
  height: 44px;
  width: 100%;
  display: flex;
  flex-direction: row;
`

const TextInput = Styled.input`
  height: 44px;
  flex-grow: 1;
  border-radius: 0 4px 4px 0;
  background-color: white;
  border: 1px solid ${COLOURS.app.offWhiteDivider};
  border-left: 1px dashed ${COLOURS.app.offWhiteDivider};
  padding-left: 8px;
  outline: none;
  transition: all 300ms ease;
  width: 50%;

  ${({ $isFocused }) => $isFocused && css`
    border-color: orange;
  `}
`

const TextInputLabel = Styled.label`
  font-size: 18px;
  line-height: 44px;
  padding: 0 16px;
  border-radius: 4px 0 0 4px;
  transition: all 300ms ease;
  border: 1px solid ${COLOURS.app.offWhiteDivider};
  border-right: none;
  background-color: white;

  ${({ $isFocused }) => $isFocused && css`
    border-color: orange;
  `}
`

export const Textfield = ({ label, onChange, value }) => {
  const [isFocused, setIsFocused] = useState(false);

  const id = useMemo(() => {
    return label.replace(' ', '');
  }, [label])

  return (
    <TextInputWrapper>
      <TextInputLabel $isFocused={isFocused} htmlFor={id}>{label}</TextInputLabel>
      <TextInput
        name={id}
        id={id}
        value={value}
        $isFocused={isFocused}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </TextInputWrapper >
  )
}




/*

const TextInputWrapper = Styled.div`
  position: relative;
  height: 44px;
  width: 100%;
`

const TextInput = Styled.input`
  height: 44px;
  width: 100%;
  border-radius: 4px;
  background-color: white;
  border: 1px solid ${COLOURS.app.offWhiteDivider};
  position: absolute;
  right: 0;
  top: 0;
  padding-left: 8px;
  outline: none;

  ${({ isFocused }) => isFocused && css`
    border: 2px solid orange;
  `}
`

const TextInputLabel = Styled.label`
  font-size: 18px;
  line-height: 44px;
  padding: 0 16px;
  border-radius: 4px;
  position: absolute;
  top: 0;
  transition: all 300ms ease;
  border: 2px solid transparent;
  pointer-events: none;

  ${({ isFocused }) => isFocused && css`
    border-bottom: 1px dashed ${COLOURS.app.offWhiteDivider};
    background-color: white;
    border: 2px solid orange;
    border-bottom: 2px dashed orange;
    box-shadow: 0px -3px 3px ${COLOURS.app.offWhiteDivider};
    transform: translate(10%, -95%);
    border-radius: 4px 4px 0 0;
  `}
`


*/