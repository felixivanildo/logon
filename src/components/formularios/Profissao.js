import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Switch, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'
import AddIcon from '@mui/icons-material/Add';

const ProfissaoForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Handle form submission here (e.g., send data to the server)
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Profissao:</label>
        <Controller
          name="profissao"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => <input {...field} />}
        />
        {errors.profissao && <span>{errors.profissao.message}</span>}
      </div>

      <div>
        <label>Local de Trabalho:</label>
        <Controller
          name="local_trabalho"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => <input {...field} />}
        />
        {errors.local_trabalho && <span>{errors.local_trabalho.message}</span>}
      </div>

      <div>
        <label>Cargo:</label>
        <Controller
          name="cargo"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => <input {...field} />}
        />
        {errors.local_trabalho && <span>{errors.local_trabalho.message}</span>}
      </div>

      <div>
        <label>Endereço:</label>
        <Controller
          name="endereco_trabalho"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => <input {...field} />}
        />
        {errors.local_trabalho && <span>{errors.local_trabalho.message}</span>}
      </div>

      <div>
        <label>Fone:</label>
        <Controller
          name="fone_trabalho"
          control={control}
          rules={{ required: 'This field is required' }}
          render={({ field }) => <input {...field} />}
        />
        {errors.local_trabalho && <span>{errors.local_trabalho.message}</span>}
      </div>

      <div>
        <label>Condução Propria?</label>
        <Controller
          name="batizado"
          control={control}
          defaultValue={false}
          render={({ field }) => <Switch size='small' type="checkbox" {...field} />}
        />
      </div>

      {/* ... Add other input fields as needed */}

      <div style={{display: "flex", justifyContent: "flex-end"}}>
      <Button variant="contained" endIcon={<AddIcon />} >CARREGAR SALVOS</Button>
      <Button variant="contained" color="secondary" endIcon={<SendIcon />} type="submit">SALVAR</Button>
      
      </div>
    </form>
  );
};

export default ProfissaoForm;
