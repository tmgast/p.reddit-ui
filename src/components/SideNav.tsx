import styled from 'styled-components';

function SideNav() {
  return (
    <Nav>
      <ul>
        <li><a href="/">Login</a></li>
        <li><a href="/">Home</a></li>
      </ul>
      <ul>
        <li><a href="/">Front Page</a></li>
        <li><a href="/">All</a></li>
      </ul>
    </Nav>
  )
};

export default SideNav;

const Nav = styled.div`
  position: relative;
  flex-basis: 10em;
  min-height: 100vh;
  order: 1;
  flex-grow: 1;

  background-color: #333;

  ul {
    list-style-type: none;
  }

  a {
    size: 8em;
    color: white;
  }
`;
