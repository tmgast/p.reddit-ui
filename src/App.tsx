import './App.css';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  return (
    <AppContainer className="App">
      <header className="App-header">
        <img src="/img/logo.svg" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </AppContainer>
  );
}

export default App;
