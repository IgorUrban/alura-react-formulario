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
      <FormularioCadastro aoEnviar={aoEnviarFormulario} />
    </Container>
  );

  
}


function aoEnviarFormulario(dados){
  console.log(dados);
}


export default App;