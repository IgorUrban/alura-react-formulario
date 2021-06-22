import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro.jsx";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarFormulario} validarCPF={validarCPF} />
    </Container>
  );

  
}

function aoEnviarFormulario(dados){
  console.log(dados);
}

function validarCPF(cpf){
  if(cpf.length !== 11){
    return {validado: false, texto: "CPF deve ter 11 digitos."}
  }else {
    return {validado: true, texto: ""}
  }
}

export default App;
