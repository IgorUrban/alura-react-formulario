import React, { useState, useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";

import { Stepper, Typography, Step, StepLabel} from "@material-ui/core";

function FormularioCadastro({ aoEnviar }) {
  const [etapa, setEtapa] = useState(0);
  const [dadosColetados, setDados] = useState({});
  useEffect(()=>{
    if(etapa === forms.length-1){
      aoEnviar(dadosColetados);
    }
  })
  const forms = [
    <DadosUsuario aoEnviar={coletarDados}/>,
    <DadosPessoais aoEnviar={coletarDados}/>,
    <DadosEntrega aoEnviar={coletarDados}/>,
    <Typography variant="h5">Obrigado por se cadastrar!</Typography>
  ];

  function coletarDados(dados){
    setDados({...dadosColetados, ...dados});
    proximo();
  }

  function proximo() {
    setEtapa(etapa + 1);
  }

  return( 
    <>
      <Stepper activeStep={etapa}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>
      {forms[etapa]}
    </>
  );
}

export default FormularioCadastro;
