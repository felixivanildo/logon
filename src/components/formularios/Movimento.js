import React, { useState, useEffect } from 'react';
import { useForm, Controller, set, SetFieldValue } from 'react-hook-form';
import { Switch, Button, TextField } from '@mui/material';
import SendIcon from '@mui/icons-material/Send'
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Movimento = (Props) => {
 

  const { handleSubmit, control, reset, setValue } = useForm();

 

  const onSubmit = async (data) => {
    console.log(data)
    await axios.post("http://10.254.4.132:3005/api/movimento", data).then((e)=> alert(e.message));
    
    reset();
  };

  return (
    <form   onSubmit={handleSubmit(onSubmit)} style={{display: "flex", flexWrap: "wrap"}}>
    
    <div className='child'>
        <Controller
          name="nome"
          control={control}
          defaultValue=""
          render={({ field }) =><TextField id="outlined-basic" label="Nome do movimento" size='small' variant="outlined"{...field} />}
        />
      
      </div>

      <div className='child'>
        <Controller
          name="igreja_origem"
          control={control}
          defaultValue=""
          render={({ field }) => <TextField id="outlined-basic" label="Igreja de origem" size='small' variant="outlined"{...field} />}
        />
      </div>

      <div className='child'>
        <Controller
          name="descricao"
          control={control}
            defaultValue=""
          render={({ field }) => <TextField
          id="outlined-basic"
          label="Descricao"
          multiline
          size='small'
          maxRows={4} {...field} />}
        />
      </div>

      <div className='child'>
        <Controller
          name="data_criacao"
          control={control}
          defaultValue=''
          render={({ field }) => <input type='date' {...field}/>}
        />
      </div>

    

      <div style={{display: "flex", justifyContent: "flex-end", width: "90%"}}>
      {/* <Button size="small" variant="contained" endIcon={<AddIcon />} >CARREGAR</Button> */}
      <Button size="small" variant="contained" color="secondary" endIcon={<SendIcon />} type="submit" style={{marginLeft: "15px"}}  >SALVAR</Button>
      
      </div>
    </form>
  );
};

export default Movimento;
