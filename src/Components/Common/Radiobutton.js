import { useState, useMemo } from 'react';
import Styled from 'styled-components';

export const RadioButton = ({ group, label, onChange, value, disabled }) => {
  const [isFocused, setIsFocused] = useState(false);

  const id = useMemo(() => {
    return label.replace(' ', '');
  }, [label])

  return (
    <Wrapper disabled={disabled}>
      <Label $isFocused={isFocused} htmlFor={id}>{label}</Label>
      <Radio
        type='radio'
        name={group}
        id={id}
        value={value}
        $isFocused={isFocused}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        disabled={disabled}
      />
    </Wrapper >
  )
}

const Wrapper = Styled.span`
  display: flex;
  align-items: center;
`

const Label = Styled.label`
  padding-right: 8px;
`

const Radio = Styled.input`
  height: 20px;
  width: 20px;
`