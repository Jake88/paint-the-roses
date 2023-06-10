import { useMemo } from 'react';
import Styled, { css } from 'styled-components';
import { CARD_COLOURS, CARD_SHAPES } from '../../constants';
import { Box } from './Box'

import PinkRose from '../../assets/PINK.png';
import RedRose from '../../assets/RED.png';
import PurpleRose from '../../assets/PURPLE.png';
import YellowRose from '../../assets/YELLOW.png';
import ClubBush from '../../assets/CLUB.png';
import SpadeBush from '../../assets/SPADE.png';
import DiamondBush from '../../assets/DIAMOND.png';
import HeartBush from '../../assets/HEART.png';

export const BOX_SIZE = `44px`;

const imageMap = {
  [CARD_COLOURS.PINK]: PinkRose,
  [CARD_COLOURS.RED]: RedRose,
  [CARD_COLOURS.PURPLE]: PurpleRose,
  [CARD_COLOURS.YELLOW]: YellowRose,
  [CARD_SHAPES.CLUB]: ClubBush,
  [CARD_SHAPES.SPADE]: SpadeBush,
  [CARD_SHAPES.DIAMOND]: DiamondBush,
  [CARD_SHAPES.HEART]: HeartBush,
}

export const Grid = ({ gridConfig }) => {
  const dynamicBoxSize = useMemo(() => {
    const maxWidth = (window.innerWidth * .95) / (gridConfig.length + 1);
    return maxWidth > 50 ? 50 : maxWidth;
  }, [gridConfig.length])

  return (
    <Matrix>
      < MatrixRow >
        <BlankBox size={dynamicBoxSize} />
        {gridConfig.slice(0).reverse().map((row, rowIndex) => {
          return <KeyImage
            key={`top-row-image-${row[0].type1}-${rowIndex}`}
            size={dynamicBoxSize}
            src={imageMap[row[0].type1]}
            alt={`Row for type ${row[0].type1}`}
          />
        })}
      </MatrixRow>


      {gridConfig.map((row, rowIndex) => {
        return (
          < MatrixRow key={`row-image-${row[0].type1}-${rowIndex}`} >
            <KeyImage

              size={dynamicBoxSize}
              src={imageMap[row[0].type1]}
              alt={`Row for type ${row[0].type1}`}
            />
            {row.map(({ type1, type2 }) => (
              <Box
                key={type1 + type2}
                size={dynamicBoxSize}
                isTopRowBox={rowIndex == 0}
                id={type1 + type2}
              />
            ))}
          </MatrixRow>
        )
      })}
    </Matrix>
  )
}

export const BoxCss = (size) => css`
  height: ${size}px;
  width: ${size}px;
`

const BlankBox = Styled.div`
  ${({ size }) => BoxCss(size)}
`

const KeyImage = Styled.img`
  ${({ size }) => BoxCss(size)}
  transform: scale(.8);
`

const Matrix = Styled.div`
  display: Flex;
  flex-direction: column;
`

const MatrixRow = Styled.div`
  display: Flex;
  flex-direction: row;
`