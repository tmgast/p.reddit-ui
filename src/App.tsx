import SideNav from './components/SideNav';
import styled from 'styled-components';

function App() {
  return (
    <AppContainer className="App">
      <SideNav />
      <Header className="App-header">
        <Logo src="/img/logo.svg" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Link
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </Link>
      </Header>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  color: #61dafb;
`;

const Header = styled.header`
  order: 2;
  flex-grow: 2;
  background-color: #282c34;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.img`
  height: 40vmin;
  pointer-events: none;

@media (prefers-reduced-motion: no-preference) {
  animation: App-logo-spin infinite 20s linear;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`;
