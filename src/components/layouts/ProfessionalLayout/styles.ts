import styled from 'styled-components/macro';

const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  height: 100vh;
  background-color: #f9f9f9;
`;

const Inner = styled.div`
  padding: 42px 0;
`;

const Header = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  width: 290px;
  height: auto;
`;

const Content = styled.main`
  margin-top: 46px;
`;

export { Wrapper, Inner, Header, Logo, Content };
