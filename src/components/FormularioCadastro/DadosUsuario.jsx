import React from "react";
import { TextField, Button } from "@material-ui/core";

function DadosUsuario() {
  return (
    <form>
      <TextField
        type="email"
        id="email"
        label="E-mail"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        type="password"
        id="senha"
        label="Senha"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
