import React, {useState} from 'react';
import styled from '@emotion/styled';
import Header from "./components/Header";
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';

const Container = styled.div`
  max-width: 100%;
  margin: auto 0;
`;

const ContainerForm = styled.div`
  background-color: #FFFFFF;
  padding: 3rem;
`;

function App() {
  
  const [resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos : {
      marca: '',
      year: '',
      plan: ''
    }
  });

  const { cotizacion, datos } = resumen;
  
  return (
    <Container>
      <Header titulo="Cotizador de seguros"/>
      <ContainerForm>
        <Formulario
          guardarResumen={guardarResumen} />
        <Resumen datos={datos} />
        <Resultado cotizacion={ cotizacion}/>
      </ContainerForm>
    </Container>
  );
}

export default App;
