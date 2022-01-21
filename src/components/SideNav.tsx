import styled from 'styled-components';

function SideNav() {
  return (
    <Nav>
      <a href="/">Home</a>
    </Nav>
  )
};

export default SideNav;

const Nav = styled.div`
  position: relative;
  min-height: 100vh;
  order: 1;
  flex-grow: 1;

  background-color: #333;

  a {
    size: 8em;
    color: white;
  }
`;
