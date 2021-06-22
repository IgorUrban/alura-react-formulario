import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { useEffect } from "react";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapa, setEtapa] = useState(0);
  const [dadosColetados, setDados] = useState({});
  useEffect(()=>{
    console.log(dadosColetados);
  })
  const forms = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={coletarDados} />,
  ];

  function coletarDados(dados){
    setDados({...dadosColetados, ...dados});
    proximo();
  }

  function proximo() {
    setEtapa(etapa + 1);
  }

  return <>{forms[etapa]}</>;
}

export default FormularioCadastro;
