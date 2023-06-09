import Styled, { createGlobalStyle } from 'styled-components';
import { Grid } from './Grid';
import { useGameReducer, withGameReducerProvider } from '../GameReducer/game.context';
import { HeaderBar } from './Menu/HeaderBar';
import backgroundImage from '../assets/PaintTheRosesBG.png'

function App() {
  const { store } = useGameReducer();
  return (
    <AppContainer>
      <GlobalStyle />
      <HeaderBar />
      <Grid playerName='test' playerColour='lime' />
    </AppContainer>
  );
}

export default withGameReducerProvider(App);

const GlobalStyle = createGlobalStyle`
  body, html, #root {
    margin: 0;
    padding: 0;
    position: relative;
    height: 100%;  
  }

  body {
    &:before {
      content: ' ';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0.15;
      background-image: url(${backgroundImage});
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  * {
    font-family: cursive;
    font-size: 18px;
    box-sizing: border-box;
    border: none;
    padding: 0;
    margin: 0;
    color: #333;
  }
`

const AppContainer = Styled.div`
  position: relative;
  height: 100%;  
`