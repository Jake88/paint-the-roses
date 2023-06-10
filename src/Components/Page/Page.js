import Styled from 'styled-components';
import { easyOptions, mediumOptions, hardOptions, DIFFICULTY } from '../../constants';
import { Grid } from './Grid'

const gridMap = {
  [DIFFICULTY.EASY]: easyOptions(),
  [DIFFICULTY.MEDIUM]: mediumOptions(),
  [DIFFICULTY.HARD]: hardOptions(),
}

export const Page = ({ player }) => {
  return (
    <Wrapper>
      {gridMap[player.difficulty].map((gridConfig, i) =>
        <Centerer key={`grid-wrapper-${i}`}>
          <Grid gridConfig={gridConfig} />
        </Centerer>
      )}
    </Wrapper>
  )
}

const Wrapper = Styled.div`
  position: relative;
  overflow-y: auto;
  padding: 16px 0;
`

const Centerer = Styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  & + & {
    margin-top: 16px;
  }
`
