import React, { useState } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Typography } from "@material-ui/core";
function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapa, setEtapa] = useState(0);
  const forms = [
    <DadosUsuario aoEnviar={proximo} />,
    <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />,
    <DadosEntrega aoEnviar={aoEnviar} />
  ];

  function proximo() {
    setEtapa(etapa + 1);
  }

  return <>{forms[etapa]}</>;
}

export default FormularioCadastro;
