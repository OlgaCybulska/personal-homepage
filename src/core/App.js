import Repositories from "../features/personal homepage/PersonalHomepage";
import { Header } from "../features/personal homepage/Header";
import { ThemeProvider } from "styled-components";
import { selectIsDarkTheme } from "../common/ThemeSwitch/themeSlice";
import { themeDark, themeLight } from "../common/theme";
import { useSelector } from "react-redux";
import Skillset from "../features/personal homepage/Skillset";
import WantToLearn from "../features/personal homepage/WantoToLearn";
import { GlobalStyle } from "../GlobalStyle";
import { Footer } from "../Footer";
import Container from "../common/Container";

function App() {
  const theme = useSelector(selectIsDarkTheme);

  return (
    <ThemeProvider theme={theme ? themeDark : themeLight}>
      <GlobalStyle />
      <Container>
        <Header />
        <Skillset />
        <WantToLearn />
        <Repositories />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
