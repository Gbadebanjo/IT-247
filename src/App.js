import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Navbar } from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import { ThemeProvider } from 'styled-components';
import { InfoBoxes } from './components/infoboxes/InfoBoxes';
import { useState } from 'react';
import InfoSectionOne from './components/infoSectionOne/InfoSectionOne';
import InfoSectionTwo from './components/infoSectionTwo/InfoSectionTwo';
// import { ThemeProvider } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  body {
    background-color: white;
    font-family: 'Roboto', sans-serif;
  }
     @import url("https://fonts.googleapis.com/css2?family=Splash&display=swap");
`;

const Container = styled.div`
background-color: white;
height: 100vh;
`;

const lightTheme = {
  colors: {
    primary: "darkblue",
    secondary: "tomato",
    light: "black",
    text: "snow",
    textDark: "gray",
    bgDefault: "white",
    bgPrimary: "darkblue",
    bgSecondary: "darkBlue",
    bgLight: "aliceblue",
    hoverColor: "blue",
  },
};

const darkTheme = {
  colors: {
    primary: "white",
    secondary: "tomato",
    light: "yellow",
    text: "snow",
    textDark: "gray",
    bgDefault: "black",
    bgPrimary: "black",
    bgSecondary: "black",
    bgLight: "aliceblue",
    hoverColor: "darkblue",
  },
};



function App() {
  const [mode, setMode] = useState(false);
  return (
    <ThemeProvider theme={mode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Container>
        <Navbar setMode={setMode} mode={mode} />
        <Hero />
        <InfoBoxes />
        <InfoSectionOne />
        <InfoSectionTwo />
      </Container>
    </ThemeProvider>

  )
}

export default App;
