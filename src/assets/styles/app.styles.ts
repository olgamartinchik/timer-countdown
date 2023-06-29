import styled, {keyframes} from 'styled-components'

export const SApp = styled.div`
  text-align: center;
`

export const SHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const SLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: ${spin} infinite 20s linear;
  }
`

export const SLink = styled.a`
  color: #61dafb;
`
export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
  text-transform: uppercase;
  padding: 20px;
`;
export const StyledCounter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin:0 auto;
    padding: 20px;
`;
export const TimerStyled= styled.span`
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

export const ContainerItems = styled.div`
    display: flex;    
    gap: 35px; 
    align-items: flex-start;   
`;