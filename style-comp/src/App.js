
import './App.css';
import StyledButton,{FancyButton,DarkButton}  from './components/button'
// importfrom './components/button'
import {ThemeProvider} from 'styled-components'
const theme={
  dark:{
    primary:'#000',
    text: '#fff',
  },
  light:{
    primary:'#fff',
    text: '#000',
  },
}
function App() {
  return (
    <ThemeProvider theme={theme}>

    <div className="App">
      <StyledButton>StyledButton</StyledButton>
      <div>
      <StyledButton varient='outline'>StyledButton</StyledButton>
      </div>
      <FancyButton as='h2'>FancyButton</FancyButton>
      <DarkButton as='p'>DarkButton</DarkButton>
    </div>
    </ThemeProvider>
  );
}

export default App;
