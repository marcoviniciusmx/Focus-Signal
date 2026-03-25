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

import HeaderImage from './assets/tempo.png'
import RayImage from './assets/parafuso.png'
import FocusImage from './assets/foco.png'
import TiredImage from './assets/fadiga.png'
import PauseImage from './assets/xicara-de-cafe.png'
import ImageMotivation from './assets/suporte-da-equipe.png'

function Home() {

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
              <Card>
                <img src={FocusImage} alt="imagem-foco" className="image-card" />
                <State className="active">Focado</State>
              </Card>

              <Card>
                <img src={TiredImage} alt="imagem-cansado" className="image-card" />
                <State>Cansado</State>
              </Card>

              <Card>
                <img src={PauseImage} alt="imagem-pausa" className="image-card" />
                <State>Pausa</State>
              </Card>
            </StateCards>

            <Feedback>
              <ActualState>Focado</ActualState>
              <Description>Você está no seu auge! Aproveite este momento de clareza.</Description>
              <Sugestion>Mantenha-se hidratado e continue assim. Este é o momento ideal para tarefas complexas.</Sugestion>
            </Feedback>

            <StateReset>
              <Reset type="button">Resetar Estado</Reset>
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
