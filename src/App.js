import logo from './logo.svg';
import './App.css';
import MainApp from './components/MainApp';
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #393E46;
    color: white;
    padding-bottom: 20px;
  }
`
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <MainApp />
    </div>
  );
}

export default App;
