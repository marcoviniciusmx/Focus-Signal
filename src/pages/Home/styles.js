import styled, { keyframes } from "styled-components";

export const Wrapper = styled.div`

min-height: 100vh;
min-width: 100%;
background-color: #cccccc;

`

export const Header = styled.section`
display: flex;
align-items: center;
justify-content: center;
gap: 6px;
padding-top: 20px;
`

export const ContainerImagem = styled.div`
display: flex;
align-items: center;
justify-content: center;

& img {
    width: 16px;
}
`

export const Logo = styled.h2`
color: green;
font-size: 1.2rem;
`

export const Main = styled.section`
display: flex;
flex-direction: column;
gap: 20px;
align-items: center;
justify-content: center;
margin: 0 15px 15px 15px;

& .main-texts {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px 0;
    text-align: center;
}

`

export const Title = styled.h1`
font-size: 2.2rem;
`

export const Subtitle = styled.p`
font-size: .8rem;
margin-top: 10px;
max-width: 250px;
`

export const ContainerContent = styled.section`
background-color: #ffff;
border-radius: 30px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
padding: 20px;
`

export const ContainerRay = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: green;
border-radius: 999px;
margin: 20px 0;
width: 100px;
height: 100px;
box-shadow: 0 0px 20px rgba(0, 0, 0, 0.8);

& img {
    width: 35px;
}
`

export const StateCards = styled.section`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
gap: 10px;
`

export const Card = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 10px;
cursor: pointer;
background-color: #dbdbdb;
border-radius: 999px;
width: 100px;
height: 60px;

& img {
    width: 15px;
}

&.active {
    background-color: green;
    color: #ffff;
  }
`

export const State = styled.p`
font-size: .7rem;
color: gray;
font-weight: bold;
color: #888888;

&.active {
  color: #ffff;
}
`

export const Feedback = styled.section`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
width: 350px;
gap: 10px;
margin: 10px 0;
`

export const ActualState = styled.p`
font-size: 1.1rem;
border-left: 2px solid green;
padding: 5px;
color: green;
`

export const Description = styled.h2`
font-size: 1.2rem;
`

export const Sugestion = styled.p`
font-size: .8rem;
max-width: 320px;
`

export const StateReset = styled.div``

export const Reset = styled.button`
background: transparent;
border: none;
margin: 10px 0 50px 0;
cursor: pointer;
font-weight: bold;
font-size: .8rem;
`

export const arrowBoost = keyframes`
0% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    transform: translate(4px, -4px) rotate(-4deg) scale(1.03);
  }
  50% {
    transform: translate(8px, -8px) rotate(-6deg) scale(1.06);
  }
  75% {
    transform: translate(4px, -4px) rotate(-3deg) scale(1.03);
  }
  100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
`

export const MotivationImage = styled.div`
display: flex;
align-items: center;
justify-content: center;

& img {
    width: 120px;
    cursor: pointer;
    transition: transform 0.5s ease;
    transform-origin: center;
}

& img:hover {
    animation: ${arrowBoost} 0.9s ease;
}
`;