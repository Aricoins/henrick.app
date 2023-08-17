import React from 'react';
import styled from 'styled-components';
import jsLogo from "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png";
import cssLogo from './css-logo.svg';
import htmlLogo from './html-logo.svg';
import reactLogo from './react-logo.svg';
import routerLogo from './router-logo.svg';
import reduxLogo from './redux-logo.svg';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const LogoWrapper = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 50%;
  padding: 1rem;
  width: 6rem;
  height: 6rem;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
`;

const JavaScriptLogo = () => (
  <LogoWrapper>
    <Logo src={jsLogo} alt="JavaScript logo" />
  </LogoWrapper>
);

const CSSLogo = () => (
  <LogoWrapper>
    <Logo src={cssLogo} alt="CSS logo" />
  </LogoWrapper>
);

const HTMLLogo = () => (
  <LogoWrapper>
    <Logo src={htmlLogo} alt="HTML logo" />
  </LogoWrapper>
);

const ReactLogo = () => (
  <LogoWrapper>
    <Logo src={reactLogo} alt="React logo" />
  </LogoWrapper>
);

const RouterLogo = () => (
  <LogoWrapper>
    <Logo src={routerLogo} alt="React Router logo" />
  </LogoWrapper>
);

const ReduxLogo = () => (
  <LogoWrapper>
    <Logo src={reduxLogo} alt="Redux logo" />
  </LogoWrapper>
);

const Logos = () => (
  <Wrapper>
    <JavaScriptLogo />
    <CSSLogo />
    <HTMLLogo />
    <ReactLogo />
    <RouterLogo />
    <ReduxLogo />
  </Wrapper>
);

export default Logos;
