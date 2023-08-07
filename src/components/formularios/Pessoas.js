import React, { useState, useEffect } from 'react';
import { useForm, Controller, set, SetFieldValue } from 'react-hook-form';
import { Switch, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Pessoas = (Props) => {
 

  const { handleSubmit, control, reset, setValue } = useForm();

 

  const onSubmit = async (data) => {
    console.log(data)
    await axios.post("http://10.254.4.132:3005/api/pessoa", data).then((e)=> alert(e.message));
    
    reset();
  };

  return (
    <form   onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexWrap: "wrap"}}>
    
    <div className='child'>
        <Controller
          name="nome"
          control={control}
       
          render={({ field }) =><TextField id="outlined-basic" label="Nome" size='small' variant="outlined"{...field} />}
        />
      
      </div>

      <div className='child'>
      <Controller
          name="nome_usual"
          control={control}
         
          render={({ field }) => <TextField id="outlined-basic" label="Nome usual" size='small' variant="outlined"{...field} />}
        />
      </div>

      <div className='child'>
      <Controller
          name="data_nasc"
          control={control}
    
          render={({ field }) => <input type='date' {...field}/>}
        />
      </div>

      <div className='child'>
      <Controller
          name="fone"
          control={control}
          
          render={({ field }) => <TextField id="outlined-basic" label="Telefone" size='small' variant="outlined"{...field} />}
        />
      </div>

      <div className='child'>
        <label>Batizado</label>
        <Controller
          name="batizado"
          control={control}
          // defaultValue={teste.batizado }
          render={({ field }) => <Switch size='small'  type="checkbox" {...field}  {...field}/>}
        />
      </div>

      <div className='child'>
        <label>Crismado</label>
        <Controller
          name="Crismado"
          control={control}
          // defaultValue={teste.batizado }
          render={({ field }) => <Switch size='small'  type="checkbox" {...field}  {...field}/>}
        />
      </div>

      <div className='child'>
        <label>Primeira Comunhão</label>
        <Controller
          name="primeira_comunhão"
          control={control}
          // defaultValue={teste.batizado }
          render={({ field }) => <Switch size='small'  type="checkbox" {...field}  {...field}/>}
        />
      </div>

      <div className='child'>
      <Controller
          name="grau_instrucao"
          control={control}
          
          render={({ field }) => <TextField id="outlined-basic" label="Grau de instrução" size='small' variant="outlined"{...field} />}
        />
    </div>

      <div style={{display: "flex", justifyContent: "flex-end", width: "90%"}}>
      {/* <Button size="small" variant="contained" endIcon={<AddIcon />} >CARREGAR</Button> */}
      <Button size="small" variant="contained" color="secondary" endIcon={<SendIcon />} type="submit" style={{marginLeft: "15px"}}  >SALVAR</Button>
      
      </div>
    </form>
  );
};

export default Pessoas;
