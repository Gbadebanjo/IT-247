import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { Navbar } from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import { ThemeProvider } from 'styled-components';
import { InfoBoxes } from './components/infoboxes/InfoBoxes';
import { useState } from 'react';
import InfoSectionOne from './components/infoSectionOne/InfoSectionOne';
import InfoSectionTwo from './components/infoSectionTwo/InfoSectionTwo';
import InfoSectionThree from './components/infoSectionThree/InfoSectionThree';
import InfoSectionFour from './components/infoSectionFour/InfoSectionFour';
import Team from './components/team/Team';
import Blogs from './components/blogs/Blogs';
import Footer from './components/footer/Footer';
// import { ThemeProvider } from 'styled-components';
const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
  body {
    background-color: white;
    font-family: 'Roboto', sans-serif;
  }
     @import url("https://fonts.googleapis.com/css2?family=Splash&display=swap");
`;

const Container = styled.div`
background-color: background-color: ${(props) => props.theme.colors.bgDefault};
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
    hoverColor: "aliceblue",
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
        <InfoSectionThree />
        <InfoSectionFour />
        <Team />
        <Blogs />
        <Footer/>
      </Container>
    </ThemeProvider>

  )
}

export default App;
