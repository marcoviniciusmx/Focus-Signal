import { useState } from "react"

import {
  ActualState,
  Card,
  ContainerContent,
  ContainerImagem,
  ContainerRay,
  Description,
  Feedback,
  Header,
  Logo,
  Main,
  MotivationImage,
  Reset,
  State,
  StateCards,
  StateReset,
  Subtitle,
  Sugestion,
  Title,
  Wrapper
} from "./styles"

import HeaderImage from '../../assets/tempo.png'
import RayImage from '../../assets/parafuso.png'
import FocusImage from '../../assets/foco.png'
import TiredImage from '../../assets/fadiga.png'
import PauseImage from '../../assets/xicara-de-cafe.png'
import ImageMotivation from '../../assets/suporte-da-equipe.png'

function Home() {

  const [state, setState] = useState('Focado')

  const contentByState = {
    Focado: {
      description: "Você está no seu auge! Aproveite este momento de clareza.",
      suggestion:
        "Mantenha-se hidratado e continue assim. Este é o momento ideal para tarefas complexas."

    },
    Cansado: {
      description: "Seu ritmo diminuiu um pouco. Talvez seja hora de desacelerar.",
      suggestion:
        "Respire fundo, reorganize as ideias e avance com calma. Uma pequena pausa mental pode ajudar você a recuperar o foco."
    },
    Pausa: {
      description:
        "Você vem se esforçando bastante, talvez seja a hora de cuidar um pouco de você.",
      suggestion:
        "Pare por alguns minutos, beba água, alongue o corpo e respire fundo. Descansar também faz parte do processo."
    }
  }

  return (

    <>
      <Wrapper>
        <Header>
          <ContainerImagem>
            <img src={HeaderImage} alt="Relógio" className="imagem-relógio" />
          </ContainerImagem>
          <Logo>Semáfaro de Foco</Logo>
        </Header>

        <Main>
          <div className="main-texts">
            <Title>Semáfaro de Foco</Title>
            <Subtitle>Escolha como você está se sentindo agora e receba uma recomendação rápida</Subtitle>
          </div>

          <ContainerContent>
            <ContainerRay>
              <img src={RayImage} alt="imagem-raio" className="ray" />
            </ContainerRay>

            <StateCards>
              <Card
                onClick={() => setState('Focado')}
                className={state === 'Focado' ? 'active' : ''}
              >
                <img src={FocusImage} alt="imagem-foco" className="image-card" />
                <State className={state === 'Focado' ? 'active' : ''}>Focado</State>
              </Card>

              <Card
                onClick={() => setState('Cansado')}
                className={state === 'Cansado' ? 'active' : ''}
              >
                <img src={TiredImage} alt="imagem-cansado" className="image-card" />
                <State className={state === 'Cansado' ? 'active' : ''}>Cansado</State>
              </Card>

              <Card
                onClick={() => setState('Pausa')}
                className={state === 'Pausa' ? 'active' : ''}
              >
                <img src={PauseImage} alt="imagem-pausa" className="image-card" />
                <State className={state === 'Pausa' ? 'active' : ''}>Pausa</State>
              </Card>
            </StateCards>

            <Feedback>
              <ActualState>{state}</ActualState>
              <Description>{contentByState[state].description}</Description>
              <Sugestion>{contentByState[state].suggestion}</Sugestion>
            </Feedback>

            <StateReset>
              <Reset type="button" onClick={() => setState('Focado')}>Resetar Estado</Reset>
            </StateReset>
          </ContainerContent>

          <MotivationImage>
            <img src={ImageMotivation} alt="imagem-motivação" className="motivation" />
          </MotivationImage>
        </Main>
      </Wrapper>
    </>
  )
}

export default Home
