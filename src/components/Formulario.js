import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Switch, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'
import AddIcon from '@mui/icons-material/Add';

const FormComponent = () => {
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here, e.g., send data to the server or perform other actions
    console.log(data);
    // Reset the form after submission (optional)
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Usuário:</label>
        <Controller
          name="usuario"
          control={control}
          defaultValue=""
          render={({ field }) => <input type="number" {...field} />}
        />
      </div>

      <div>
        <label>Nome:</label>
        <Controller
          name="nome"
          control={control}
          defaultValue=""
          render={({ field }) => <input type="text" {...field}/>}
        />
      </div>

      <div>
        <label>Nome Usual:</label>
        <Controller
          name="nome_usual"
          control={control}
          defaultValue=""
          render={({ field }) => <input type="text" {...field} />}
        />
      </div>

      <div>
        <label>Data de Nascimento:</label>
        <Controller
          name="data_nasc"
          control={control}
          defaultValue=""
          render={({ field }) => <input type="date" {...field} />}
        />
      </div>

      <div>
        <label>Telefone:</label>
        <Controller
          name="fone"
          control={control}
          defaultValue=""
          render={({ field }) => <input type="text" {...field} />}
        />
      </div>

      <div>
        <label>Religião:</label>
        <Controller
          name="religiao"
          control={control}
          defaultValue=""
          render={({ field }) => <input type="text" {...field} />}
        />
      </div>

      <div>
        <label>Batizado:</label>
        <Controller
          name="batizado"
          control={control}
          defaultValue={false}
          render={({ field }) => <Switch size='small' type="checkbox" {...field} />}
        />
      </div>

      <div>
        <label>Primeira Comunhão:</label>
        <Controller
          name="primeira_comunhao"
          control={control}
          defaultValue={false}
          render={({ field }) => <Switch  size='small' type="checkbox" {...field} />}
        />
      </div>

      <div>
        <label>Crismado:</label>
        <Controller
          name="crismado"
          control={control}
          defaultValue={false}
          render={({ field }) => <Switch size='small' type="checkbox" {...field} />}
        />
      </div>

      <div>
        <label>Grau de Instrução:</label>
        <Controller
          name="grau_instrucao"
          control={control}
          defaultValue=""
          render={({ field }) => <input type="text" {...field} />}
        />
      </div>

      <div style={{display: "flex", justifyContent: "flex-end"}}>
      <Button variant="contained" endIcon={<AddIcon />} >CARREGAR SALVOS</Button>
      <Button variant="contained" color="secondary" endIcon={<SendIcon />} type="submit">SALVAR</Button>
      
      </div>
    </form>
  );
};

export default FormComponent;
